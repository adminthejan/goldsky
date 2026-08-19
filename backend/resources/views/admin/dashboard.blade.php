<x-admin-layout>
    <x-slot name="title">Dashboard</x-slot>

    <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div class="bg-white rounded-lg border border-slate-200 p-5">
            <div class="text-sm text-slate-500">Total Products</div>
            <div class="text-2xl font-semibold text-slate-900 mt-1">{{ $stats['total_products'] }}</div>
        </div>
        <div class="bg-white rounded-lg border border-slate-200 p-5">
            <div class="text-sm text-slate-500">Low Stock</div>
            <div class="text-2xl font-semibold text-amber-600 mt-1">{{ $stats['low_stock_products'] }}</div>
        </div>
        <div class="bg-white rounded-lg border border-slate-200 p-5">
            <div class="text-sm text-slate-500">Out of Stock</div>
            <div class="text-2xl font-semibold text-red-600 mt-1">{{ $stats['out_of_stock_products'] }}</div>
        </div>
        <div class="bg-white rounded-lg border border-slate-200 p-5">
            <div class="text-sm text-slate-500">Total Services</div>
            <div class="text-2xl font-semibold text-slate-900 mt-1">{{ $stats['total_services'] }}</div>
        </div>
        <div class="bg-white rounded-lg border border-slate-200 p-5">
            <div class="text-sm text-slate-500">Inquiries</div>
            <div class="text-2xl font-semibold text-slate-900 mt-1">{{ $stats['total_inquiries'] }}</div>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg border border-slate-200">
            <div class="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
                <h2 class="font-medium text-slate-900">Low / out of stock</h2>
                <a href="{{ route('admin.products.index', ['stock_status' => 'Low Stock']) }}" class="text-sm text-indigo-600 hover:underline">View all</a>
            </div>
            <ul class="divide-y divide-slate-100">
                @forelse ($lowStockProducts as $product)
                    <li class="px-5 py-3 flex items-center justify-between text-sm">
                        <a href="{{ route('admin.products.edit', $product) }}" class="text-slate-900 hover:underline">{{ $product->name }}</a>
                        <span class="font-medium {{ $product->stock_quantity <= 0 ? 'text-red-600' : 'text-amber-600' }}">
                            {{ $product->stock_quantity }} left
                        </span>
                    </li>
                @empty
                    <li class="px-5 py-4 text-sm text-slate-500">Nothing low on stock. 🎉</li>
                @endforelse
            </ul>
        </div>

        <div class="bg-white rounded-lg border border-slate-200">
            <div class="px-5 py-4 border-b border-slate-200">
                <h2 class="font-medium text-slate-900">Recent inquiries</h2>
            </div>
            <ul class="divide-y divide-slate-100">
                @forelse ($recentInquiries as $inquiry)
                    <li class="px-5 py-3 text-sm">
                        <div class="flex items-center justify-between">
                            <span class="text-slate-900 font-medium">{{ $inquiry->name ?? 'Anonymous' }}</span>
                            <span class="text-slate-400 text-xs">{{ $inquiry->created_at->diffForHumans() }}</span>
                        </div>
                        <div class="text-slate-500">
                            {{ $inquiry->phone }}
                            @if ($inquiry->product) &middot; {{ $inquiry->product->name }} @endif
                            @if ($inquiry->service) &middot; {{ $inquiry->service->name }} @endif
                        </div>
                    </li>
                @empty
                    <li class="px-5 py-4 text-sm text-slate-500">No inquiries logged yet.</li>
                @endforelse
            </ul>
        </div>
    </div>
</x-admin-layout>
