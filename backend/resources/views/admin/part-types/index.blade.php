<x-admin-layout>
    <x-slot name="title">Part Types</x-slot>

    <div class="flex items-center justify-between mb-4">
        <p class="text-sm text-slate-500">{{ $partTypes->total() }} part types</p>
        <a href="{{ route('admin.part-types.create') }}" class="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
            + Add Part Type
        </a>
    </div>

    <div class="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <table class="min-w-full divide-y divide-slate-200 text-sm">
            <thead class="bg-slate-50 text-left text-xs font-medium text-slate-500 uppercase">
                <tr>
                    <th class="px-5 py-3">Name</th>
                    <th class="px-5 py-3">Slug</th>
                    <th class="px-5 py-3">Products</th>
                    <th class="px-5 py-3">Status</th>
                    <th class="px-5 py-3"></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
                @forelse ($partTypes as $partType)
                    <tr>
                        <td class="px-5 py-3 font-medium text-slate-900">{{ $partType->name }}</td>
                        <td class="px-5 py-3 text-slate-500">{{ $partType->slug }}</td>
                        <td class="px-5 py-3 text-slate-500">{{ $partType->products_count }}</td>
                        <td class="px-5 py-3">@include('admin.partials.status-badge', ['active' => $partType->is_active])</td>
                        <td class="px-5 py-3 text-right space-x-3">
                            <a href="{{ route('admin.part-types.edit', $partType) }}" class="text-indigo-600 hover:underline">Edit</a>
                            <form method="POST" action="{{ route('admin.part-types.destroy', $partType) }}" class="inline" onsubmit="return confirm('Delete this part type?');">
                                @csrf @method('DELETE')
                                <button type="submit" class="text-red-600 hover:underline">Delete</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="5" class="px-5 py-6 text-center text-slate-500">No part types yet.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>

    <div class="mt-4">{{ $partTypes->links() }}</div>
</x-admin-layout>
