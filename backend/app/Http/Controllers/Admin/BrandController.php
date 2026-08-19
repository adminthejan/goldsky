<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class BrandController extends Controller
{
    public function index(): View
    {
        $brands = Brand::withCount(['products', 'deviceModels'])->orderBy('name')->paginate(15);

        return view('admin.brands.index', ['brands' => $brands]);
    }

    public function create(): View
    {
        return view('admin.brands.create');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $this->validated($request);

        Brand::create($validated);

        return redirect()->route('admin.brands.index')->with('success', 'Brand created.');
    }

    public function edit(Brand $brand): View
    {
        return view('admin.brands.edit', ['brand' => $brand]);
    }

    public function update(Request $request, Brand $brand): RedirectResponse
    {
        $validated = $this->validated($request, $brand->id);

        $brand->update($validated);

        return redirect()->route('admin.brands.index')->with('success', 'Brand updated.');
    }

    public function destroy(Brand $brand): RedirectResponse
    {
        $brand->delete();

        return redirect()->route('admin.brands.index')->with('success', 'Brand deleted.');
    }

    private function validated(Request $request, ?int $ignoreId = null): array
    {
        // Merge the derived slug in before validating so its uniqueness rule
        // has something to check against.
        $request->merge(['slug' => Str::slug($request->string('name'))]);

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => [Rule::unique('brands', 'slug')->ignore($ignoreId)],
            'is_active' => ['sometimes', 'boolean'],
        ], [], ['slug' => 'name']);

        $validated['is_active'] = $request->boolean('is_active', true);

        return $validated;
    }
}
