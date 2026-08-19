<x-admin-layout>
    <x-slot name="title">Brands</x-slot>

    <div class="flex items-center justify-between mb-4">
        <p class="text-sm text-slate-500">{{ $brands->total() }} brands</p>
        <a href="{{ route('admin.brands.create') }}" class="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
            + Add Brand
        </a>
    </div>

    <div class="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <table class="min-w-full divide-y divide-slate-200 text-sm">
            <thead class="bg-slate-50 text-left text-xs font-medium text-slate-500 uppercase">
                <tr>
                    <th class="px-5 py-3">Name</th>
                    <th class="px-5 py-3">Slug</th>
                    <th class="px-5 py-3">Models</th>
                    <th class="px-5 py-3">Products</th>
                    <th class="px-5 py-3">Status</th>
                    <th class="px-5 py-3"></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
                @forelse ($brands as $brand)
                    <tr>
                        <td class="px-5 py-3 font-medium text-slate-900">{{ $brand->name }}</td>
                        <td class="px-5 py-3 text-slate-500">{{ $brand->slug }}</td>
                        <td class="px-5 py-3 text-slate-500">{{ $brand->device_models_count }}</td>
                        <td class="px-5 py-3 text-slate-500">{{ $brand->products_count }}</td>
                        <td class="px-5 py-3">
                            @include('admin.partials.status-badge', ['active' => $brand->is_active])
                        </td>
                        <td class="px-5 py-3 text-right space-x-3">
                            <a href="{{ route('admin.brands.edit', $brand) }}" class="text-indigo-600 hover:underline">Edit</a>
                            <form method="POST" action="{{ route('admin.brands.destroy', $brand) }}" class="inline" onsubmit="return confirm('Delete this brand?');">
                                @csrf @method('DELETE')
                                <button type="submit" class="text-red-600 hover:underline">Delete</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="6" class="px-5 py-6 text-center text-slate-500">No brands yet.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>

    <div class="mt-4">{{ $brands->links() }}</div>
</x-admin-layout>
