<x-admin-layout>
    <x-slot name="title">Products</x-slot>

    <form method="GET" action="{{ route('admin.products.index') }}" class="bg-white rounded-lg border border-slate-200 p-4 mb-4 grid grid-cols-2 md:grid-cols-5 gap-3 items-end">
        <div class="col-span-2 md:col-span-1">
            <label class="block text-xs font-medium text-slate-500 mb-1">Search</label>
            <input type="text" name="search" value="{{ $filters['search'] ?? '' }}" placeholder="Name or part no."
                   class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
        </div>
        <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Brand</label>
            <select name="brand_id" class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                <option value="">All</option>
                @foreach ($brands as $brand)
                    <option value="{{ $brand->id }}" {{ (string) ($filters['brand_id'] ?? '') === (string) $brand->id ? 'selected' : '' }}>{{ $brand->name }}</option>
                @endforeach
            </select>
        </div>
        <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Category</label>
            <select name="category_id" class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                <option value="">All</option>
                @foreach ($categories as $category)
                    <option value="{{ $category->id }}" {{ (string) ($filters['category_id'] ?? '') === (string) $category->id ? 'selected' : '' }}>{{ $category->name }}</option>
                @endforeach
            </select>
        </div>
        <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Part type</label>
            <select name="part_type_id" class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                <option value="">All</option>
                @foreach ($partTypes as $partType)
                    <option value="{{ $partType->id }}" {{ (string) ($filters['part_type_id'] ?? '') === (string) $partType->id ? 'selected' : '' }}>{{ $partType->name }}</option>
                @endforeach
            </select>
        </div>
        <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Stock</label>
            <select name="stock_status" class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                <option value="">All</option>
                @foreach (['In Stock', 'Low Stock', 'Out of Stock'] as $status)
                    <option value="{{ $status }}" {{ ($filters['stock_status'] ?? '') === $status ? 'selected' : '' }}>{{ $status }}</option>
                @endforeach
            </select>
        </div>
        <div class="col-span-2 md:col-span-5 flex gap-3">
            <button type="submit" class="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">Filter</button>
            <a href="{{ route('admin.products.index') }}" class="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Reset</a>
        </div>
    </form>

    <div class="flex items-center justify-between mb-4">
        <p class="text-sm text-slate-500">{{ $products->total() }} products</p>
        <a href="{{ route('admin.products.create') }}" class="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
            + Add Product
        </a>
    </div>

    <div class="bg-white rounded-lg border border-slate-200 overflow-x-auto">
        <table class="min-w-full divide-y divide-slate-200 text-sm">
            <thead class="bg-slate-50 text-left text-xs font-medium text-slate-500 uppercase">
                <tr>
                    <th class="px-5 py-3">Product</th>
                    <th class="px-5 py-3">Part No.</th>
                    <th class="px-5 py-3">Brand</th>
                    <th class="px-5 py-3">Grade</th>
                    <th class="px-5 py-3">Retail</th>
                    <th class="px-5 py-3">Stock</th>
                    <th class="px-5 py-3">Status</th>
                    <th class="px-5 py-3"></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
                @forelse ($products as $product)
                    <tr>
                        <td class="px-5 py-3">
                            <div class="flex items-center gap-3">
                                @php $primary = $product->images->firstWhere('is_primary', true) ?? $product->images->first(); @endphp
                                @if ($primary)
                                    <img src="{{ $primary->url }}" alt="" class="h-10 w-10 rounded object-cover border border-slate-200">
                                @else
                                    <div class="h-10 w-10 rounded bg-slate-100 border border-slate-200"></div>
                                @endif
                                <div>
                                    <div class="font-medium text-slate-900">{{ $product->name }}</div>
                                    <div class="text-xs text-slate-500">{{ $product->category?->name }}</div>
                                </div>
                            </div>
                        </td>
                        <td class="px-5 py-3 text-slate-500">{{ $product->part_number }}</td>
                        <td class="px-5 py-3 text-slate-500">{{ $product->brand?->name ?? '—' }}</td>
                        <td class="px-5 py-3 text-slate-500">{{ $product->quality_grade }}</td>
                        <td class="px-5 py-3 text-slate-500">LKR {{ number_format($product->retail_price) }}</td>
                        <td class="px-5 py-3">
                            <form method="POST" action="{{ route('admin.products.stock', $product) }}" class="flex items-center gap-2">
                                @csrf @method('PATCH')
                                <input type="number" name="stock_quantity" min="0" value="{{ $product->stock_quantity }}"
                                       class="w-16 rounded-md border-slate-300 shadow-sm text-sm focus:border-indigo-500 focus:ring-indigo-500">
                                <button type="submit" class="text-xs text-indigo-600 hover:underline">Save</button>
                            </form>
                        </td>
                        <td class="px-5 py-3">
                            @php
                                $badgeClass = match ($product->stock_status) {
                                    'In Stock' => 'bg-green-50 text-green-700',
                                    'Low Stock' => 'bg-amber-50 text-amber-700',
                                    default => 'bg-red-50 text-red-700',
                                };
                            @endphp
                            <span class="inline-flex items-center rounded-full {{ $badgeClass }} px-2.5 py-0.5 text-xs font-medium">
                                {{ $product->stock_status }}
                            </span>
                            @unless ($product->is_active)
                                <span class="block mt-1 text-xs text-slate-400">Inactive</span>
                            @endunless
                        </td>
                        <td class="px-5 py-3 text-right space-x-3 whitespace-nowrap">
                            <a href="{{ route('admin.products.edit', $product) }}" class="text-indigo-600 hover:underline">Edit</a>
                            <form method="POST" action="{{ route('admin.products.destroy', $product) }}" class="inline" onsubmit="return confirm('Delete this product?');">
                                @csrf @method('DELETE')
                                <button type="submit" class="text-red-600 hover:underline">Delete</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="8" class="px-5 py-6 text-center text-slate-500">No products found.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>

    <div class="mt-4">{{ $products->links() }}</div>
</x-admin-layout>
