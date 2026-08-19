<x-admin-layout>
    <x-slot name="title">Wholesale Tiers</x-slot>

    <div class="flex items-center justify-between mb-4">
        <p class="text-sm text-slate-500">{{ $tiers->total() }} tiers</p>
        <a href="{{ route('admin.wholesale-tiers.create') }}" class="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
            + Add Tier
        </a>
    </div>

    <div class="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <table class="min-w-full divide-y divide-slate-200 text-sm">
            <thead class="bg-slate-50 text-left text-xs font-medium text-slate-500 uppercase">
                <tr>
                    <th class="px-5 py-3">Name</th>
                    <th class="px-5 py-3">Min Qty</th>
                    <th class="px-5 py-3">Discount</th>
                    <th class="px-5 py-3">Pricing note</th>
                    <th class="px-5 py-3">Status</th>
                    <th class="px-5 py-3"></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
                @forelse ($tiers as $tier)
                    <tr>
                        <td class="px-5 py-3 font-medium text-slate-900">{{ $tier->name }}</td>
                        <td class="px-5 py-3 text-slate-500">{{ $tier->min_quantity }}+</td>
                        <td class="px-5 py-3 text-slate-500">{{ $tier->discount_percentage !== null ? $tier->discount_percentage.'%' : '—' }}</td>
                        <td class="px-5 py-3 text-slate-500">{{ $tier->pricing_note ?? '—' }}</td>
                        <td class="px-5 py-3">@include('admin.partials.status-badge', ['active' => $tier->is_active])</td>
                        <td class="px-5 py-3 text-right space-x-3">
                            <a href="{{ route('admin.wholesale-tiers.edit', $tier) }}" class="text-indigo-600 hover:underline">Edit</a>
                            <form method="POST" action="{{ route('admin.wholesale-tiers.destroy', $tier) }}" class="inline" onsubmit="return confirm('Delete this tier?');">
                                @csrf @method('DELETE')
                                <button type="submit" class="text-red-600 hover:underline">Delete</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="6" class="px-5 py-6 text-center text-slate-500">No wholesale tiers yet.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>

    <div class="mt-4">{{ $tiers->links() }}</div>
</x-admin-layout>
