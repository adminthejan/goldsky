<x-admin-layout>
    <x-slot name="title">Services</x-slot>

    <div class="flex items-center justify-between mb-4">
        <p class="text-sm text-slate-500">{{ $services->total() }} services</p>
        <a href="{{ route('admin.services.create') }}" class="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
            + Add Service
        </a>
    </div>

    <div class="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <table class="min-w-full divide-y divide-slate-200 text-sm">
            <thead class="bg-slate-50 text-left text-xs font-medium text-slate-500 uppercase">
                <tr>
                    <th class="px-5 py-3">Name</th>
                    <th class="px-5 py-3">Price from</th>
                    <th class="px-5 py-3">Turnaround</th>
                    <th class="px-5 py-3">Featured</th>
                    <th class="px-5 py-3">Status</th>
                    <th class="px-5 py-3"></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
                @forelse ($services as $service)
                    <tr>
                        <td class="px-5 py-3 font-medium text-slate-900">{{ $service->name }}</td>
                        <td class="px-5 py-3 text-slate-500">LKR {{ number_format($service->price_from) }}</td>
                        <td class="px-5 py-3 text-slate-500">{{ $service->turnaround_time }}</td>
                        <td class="px-5 py-3 text-slate-500">{{ $service->is_featured ? 'Yes' : 'No' }}</td>
                        <td class="px-5 py-3">@include('admin.partials.status-badge', ['active' => $service->is_active])</td>
                        <td class="px-5 py-3 text-right space-x-3">
                            <a href="{{ route('admin.services.edit', $service) }}" class="text-indigo-600 hover:underline">Edit</a>
                            <form method="POST" action="{{ route('admin.services.destroy', $service) }}" class="inline" onsubmit="return confirm('Delete this service?');">
                                @csrf @method('DELETE')
                                <button type="submit" class="text-red-600 hover:underline">Delete</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="6" class="px-5 py-6 text-center text-slate-500">No services yet.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>

    <div class="mt-4">{{ $services->links() }}</div>
</x-admin-layout>
