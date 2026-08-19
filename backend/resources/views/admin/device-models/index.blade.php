<x-admin-layout>
    <x-slot name="title">Device Models</x-slot>

    <div class="flex items-center justify-between mb-4">
        <p class="text-sm text-slate-500">{{ $deviceModels->total() }} device models</p>
        <a href="{{ route('admin.device-models.create') }}" class="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
            + Add Device Model
        </a>
    </div>

    <div class="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <table class="min-w-full divide-y divide-slate-200 text-sm">
            <thead class="bg-slate-50 text-left text-xs font-medium text-slate-500 uppercase">
                <tr>
                    <th class="px-5 py-3">Name</th>
                    <th class="px-5 py-3">Brand</th>
                    <th class="px-5 py-3">Products</th>
                    <th class="px-5 py-3">Status</th>
                    <th class="px-5 py-3"></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
                @forelse ($deviceModels as $deviceModel)
                    <tr>
                        <td class="px-5 py-3 font-medium text-slate-900">{{ $deviceModel->name }}</td>
                        <td class="px-5 py-3 text-slate-500">{{ $deviceModel->brand->name ?? '—' }}</td>
                        <td class="px-5 py-3 text-slate-500">{{ $deviceModel->products_count }}</td>
                        <td class="px-5 py-3">@include('admin.partials.status-badge', ['active' => $deviceModel->is_active])</td>
                        <td class="px-5 py-3 text-right space-x-3">
                            <a href="{{ route('admin.device-models.edit', $deviceModel) }}" class="text-indigo-600 hover:underline">Edit</a>
                            <form method="POST" action="{{ route('admin.device-models.destroy', $deviceModel) }}" class="inline" onsubmit="return confirm('Delete this device model?');">
                                @csrf @method('DELETE')
                                <button type="submit" class="text-red-600 hover:underline">Delete</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="5" class="px-5 py-6 text-center text-slate-500">No device models yet.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>

    <div class="mt-4">{{ $deviceModels->links() }}</div>
</x-admin-layout>
