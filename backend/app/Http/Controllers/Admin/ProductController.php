<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use App\Models\DeviceModel;
use App\Models\PartType;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class ProductController extends Controller
{
    public function index(Request $request): View
    {
        $products = Product::query()
            ->with(['brand', 'category', 'partType', 'images'])
            ->when($request->filled('search'), function ($q) use ($request) {
                $term = '%'.$request->string('search').'%';
                $q->where(function ($q) use ($term) {
                    $q->where('name', 'like', $term)->orWhere('part_number', 'like', $term);
                });
            })
            ->when($request->filled('brand_id'), fn ($q) => $q->where('brand_id', $request->integer('brand_id')))
            ->when($request->filled('category_id'), fn ($q) => $q->where('category_id', $request->integer('category_id')))
            ->when($request->filled('part_type_id'), fn ($q) => $q->where('part_type_id', $request->integer('part_type_id')))
            ->when($request->filled('stock_status'), fn ($q) => $q->stockStatus($request->string('stock_status')->toString()))
            ->orderByDesc('created_at')
            ->paginate(15)
            ->withQueryString();

        return view('admin.products.index', [
            'products' => $products,
            'brands' => Brand::orderBy('name')->get(),
            'categories' => Category::orderBy('name')->get(),
            'partTypes' => PartType::orderBy('name')->get(),
            'filters' => $request->only(['search', 'brand_id', 'category_id', 'part_type_id', 'stock_status']),
        ]);
    }

    public function create(): View
    {
        return view('admin.products.create', $this->formOptions());
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $this->validated($request);
        $images = $validated['images'] ?? [];
        $variants = $validated['variants'] ?? [];
        unset($validated['images'], $validated['variants']);

        $validated['slug'] = $this->uniqueSlug($validated['name']);

        $product = Product::create($validated);

        $this->storeUploadedImages($product, $images);
        $this->syncVariants($product, $variants);

        return redirect()->route('admin.products.index')->with('success', 'Product created.');
    }

    public function edit(Product $product): View
    {
        $product->load(['images', 'variants']);

        return view('admin.products.edit', $this->formOptions() + ['product' => $product]);
    }

    public function update(Request $request, Product $product): RedirectResponse
    {
        $validated = $this->validated($request, $product->id);
        $images = $validated['images'] ?? [];
        $variants = $validated['variants'] ?? [];
        unset($validated['images'], $validated['variants']);

        if ($validated['name'] !== $product->name) {
            $validated['slug'] = $this->uniqueSlug($validated['name'], $product->id);
        }

        $product->update($validated);

        $this->storeUploadedImages($product, $images);
        $this->syncVariants($product, $variants);

        if ($request->filled('primary_image_id')) {
            $product->images()->update(['is_primary' => false]);
            $product->images()->where('id', $request->integer('primary_image_id'))->update(['is_primary' => true]);
        }

        return redirect()->route('admin.products.index')->with('success', 'Product updated.');
    }

    public function updateStock(Request $request, Product $product): RedirectResponse
    {
        $validated = $request->validate([
            'stock_quantity' => ['required', 'integer', 'min:0'],
        ]);

        $product->update($validated);

        return back()->with('success', "Stock updated for {$product->name}.");
    }

    public function destroyImage(Product $product, ProductImage $image): RedirectResponse
    {
        abort_unless($image->product_id === $product->id, 404);

        Storage::disk('public')->delete($image->image_path);
        $wasPrimary = $image->is_primary;
        $image->delete();

        if ($wasPrimary) {
            $product->images()->orderBy('sort_order')->first()?->update(['is_primary' => true]);
        }

        return back()->with('success', 'Image removed.');
    }

    public function destroy(Product $product): RedirectResponse
    {
        foreach ($product->images as $image) {
            Storage::disk('public')->delete($image->image_path);
        }

        $product->delete();

        return redirect()->route('admin.products.index')->with('success', 'Product deleted.');
    }

    private function formOptions(): array
    {
        return [
            'brands' => Brand::orderBy('name')->get(),
            'deviceModels' => DeviceModel::with('brand')->orderBy('name')->get(),
            'categories' => Category::orderBy('name')->get(),
            'partTypes' => PartType::orderBy('name')->get(),
            'qualityGrades' => Product::QUALITY_GRADES,
        ];
    }

    private function validated(Request $request, ?int $ignoreId = null): array
    {
        // Drop blank rows the "add variant" button leaves behind when a row
        // is added but never filled in, so they don't trip required_with.
        if ($request->has('variants')) {
            $request->merge([
                'variants' => array_values(array_filter(
                    $request->input('variants', []),
                    fn ($row) => filled($row['label'] ?? null)
                )),
            ]);
        }

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'part_number' => ['required', 'string', 'max:100', Rule::unique('products', 'part_number')->ignore($ignoreId)],
            'description' => ['nullable', 'string', 'max:5000'],
            'brand_id' => ['nullable', 'exists:brands,id'],
            'device_model_id' => ['nullable', 'exists:device_models,id'],
            'category_id' => ['nullable', 'exists:categories,id'],
            'part_type_id' => ['nullable', 'exists:part_types,id'],
            'quality_grade' => ['required', Rule::in(Product::QUALITY_GRADES)],
            'retail_price' => ['required', 'integer', 'min:0'],
            'compare_at_price' => ['nullable', 'integer', 'gt:retail_price'],
            'wholesale_price' => ['nullable', 'integer', 'min:0'],
            'wholesale_min_qty' => ['nullable', 'integer', 'min:1'],
            'stock_quantity' => ['required', 'integer', 'min:0'],
            'is_featured' => ['sometimes', 'boolean'],
            'is_active' => ['sometimes', 'boolean'],
            'images' => ['sometimes', 'array'],
            'images.*' => ['image', 'mimes:jpg,jpeg,png,webp', 'max:4096'],
            'variants' => ['sometimes', 'array'],
            'variants.*.label' => ['required_with:variants', 'string', 'max:60'],
            'variants.*.swatch_hex' => ['nullable', 'regex:/^#[0-9a-fA-F]{6}$/'],
        ]);

        $validated['is_featured'] = $request->boolean('is_featured');
        $validated['is_active'] = $request->boolean('is_active', true);

        return $validated;
    }

    private function uniqueSlug(string $name, ?int $ignoreId = null): string
    {
        $base = Str::slug($name);
        $slug = $base;
        $i = 1;

        while (Product::where('slug', $slug)->when($ignoreId, fn ($q) => $q->where('id', '!=', $ignoreId))->exists()) {
            $slug = "{$base}-".++$i;
        }

        return $slug;
    }

    /**
     * Replaces the product's variant rows wholesale. Variants have no
     * dependents (no stock/price of their own, no order lines referencing
     * them yet), so a full delete-and-recreate each save is simpler and
     * just as correct as diffing individual rows.
     */
    private function syncVariants(Product $product, array $variants): void
    {
        $product->variants()->delete();

        foreach (array_values($variants) as $i => $variant) {
            $product->variants()->create([
                'label' => $variant['label'],
                'swatch_hex' => $variant['swatch_hex'] ?: null,
                'sort_order' => $i,
            ]);
        }
    }

    private function storeUploadedImages(Product $product, array $images): void
    {
        if (empty($images)) {
            return;
        }

        $hasPrimary = $product->images()->where('is_primary', true)->exists();
        $nextSort = (int) $product->images()->max('sort_order');

        foreach ($images as $index => $file) {
            $path = $file->store('products', 'public');

            $product->images()->create([
                'image_path' => $path,
                'sort_order' => ++$nextSort,
                'is_primary' => ! $hasPrimary && $index === 0,
            ]);
        }
    }
}
