<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class CategoryController extends Controller
{
    public function index(): View
    {
        $categories = Category::withCount('products')
            ->with('parent')
            ->orderBy('name')
            ->paginate(20);

        return view('admin.categories.index', ['categories' => $categories]);
    }

    public function create(): View
    {
        return view('admin.categories.create', ['parents' => $this->parentOptions()]);
    }

    public function store(Request $request): RedirectResponse
    {
        Category::create($this->validated($request));

        return redirect()->route('admin.categories.index')->with('success', 'Category created.');
    }

    public function edit(Category $category): View
    {
        return view('admin.categories.edit', [
            'category' => $category,
            'parents' => $this->parentOptions($category->id),
        ]);
    }

    public function update(Request $request, Category $category): RedirectResponse
    {
        $category->update($this->validated($request, $category->id));

        return redirect()->route('admin.categories.index')->with('success', 'Category updated.');
    }

    public function destroy(Category $category): RedirectResponse
    {
        $category->delete();

        return redirect()->route('admin.categories.index')->with('success', 'Category deleted.');
    }

    private function parentOptions(?int $excludeId = null)
    {
        return Category::whereNull('parent_id')
            ->when($excludeId, fn ($q) => $q->where('id', '!=', $excludeId))
            ->orderBy('name')
            ->get();
    }

    private function validated(Request $request, ?int $ignoreId = null): array
    {
        $request->merge(['slug' => Str::slug($request->string('name'))]);

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => [Rule::unique('categories', 'slug')->ignore($ignoreId)],
            'parent_id' => ['nullable', 'exists:categories,id'],
            'description' => ['nullable', 'string', 'max:1000'],
            'is_active' => ['sometimes', 'boolean'],
        ], [], ['slug' => 'name']);

        $validated['is_active'] = $request->boolean('is_active', true);

        return $validated;
    }
}
