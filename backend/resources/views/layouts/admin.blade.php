<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $title ?? 'Dashboard' }} · GoldSky Admin</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-slate-100 text-slate-900 antialiased">
    <div class="min-h-screen flex">
        {{-- Sidebar --}}
        <aside class="w-64 shrink-0 bg-slate-900 text-slate-200 flex flex-col">
            <div class="px-6 py-5 border-b border-slate-800">
                <a href="{{ route('admin.dashboard') }}" class="text-lg font-semibold text-white">GoldSky</a>
                <div class="text-xs text-slate-400">Admin panel</div>
            </div>
            <nav class="flex-1 px-3 py-4 space-y-1 text-sm">
                @php
                    $navItems = [
                        ['route' => 'admin.dashboard', 'pattern' => 'admin.dashboard', 'label' => 'Dashboard'],
                        ['route' => 'admin.products.index', 'pattern' => 'admin.products.*', 'label' => 'Products'],
                        ['route' => 'admin.services.index', 'pattern' => 'admin.services.*', 'label' => 'Services'],
                        ['route' => 'admin.categories.index', 'pattern' => 'admin.categories.*', 'label' => 'Categories'],
                        ['route' => 'admin.brands.index', 'pattern' => 'admin.brands.*', 'label' => 'Brands'],
                        ['route' => 'admin.device-models.index', 'pattern' => 'admin.device-models.*', 'label' => 'Device Models'],
                        ['route' => 'admin.part-types.index', 'pattern' => 'admin.part-types.*', 'label' => 'Part Types'],
                        ['route' => 'admin.wholesale-tiers.index', 'pattern' => 'admin.wholesale-tiers.*', 'label' => 'Wholesale Tiers'],
                    ];
                @endphp
                @foreach ($navItems as $item)
                    <a href="{{ route($item['route']) }}"
                       class="block rounded-md px-3 py-2 {{ request()->routeIs($item['pattern']) ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white' }}">
                        {{ $item['label'] }}
                    </a>
                @endforeach
            </nav>
            <div class="px-3 py-4 border-t border-slate-800">
                <a href="{{ route('admin.profile.edit') }}" class="block rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white {{ request()->routeIs('admin.profile.*') ? 'bg-slate-800 text-white' : '' }}">
                    Profile
                </a>
                <form method="POST" action="{{ route('admin.logout') }}">
                    @csrf
                    <button type="submit" class="w-full text-left block rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">
                        Logout
                    </button>
                </form>
            </div>
        </aside>

        {{-- Main --}}
        <div class="flex-1 flex flex-col min-w-0">
            <header class="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                <h1 class="text-xl font-semibold text-slate-900">{{ $title ?? 'Dashboard' }}</h1>
                <div class="text-sm text-slate-600">
                    Signed in as <span class="font-medium text-slate-900">{{ auth()->user()->name }}</span>
                </div>
            </header>

            <main class="flex-1 px-6 py-6">
                @if (session('success'))
                    <div class="mb-4 rounded-md bg-green-50 border border-green-200 text-green-800 px-4 py-3 text-sm">
                        {{ session('success') }}
                    </div>
                @endif

                @if (session('error'))
                    <div class="mb-4 rounded-md bg-red-50 border border-red-200 text-red-800 px-4 py-3 text-sm">
                        {{ session('error') }}
                    </div>
                @endif

                @if ($errors->any())
                    <div class="mb-4 rounded-md bg-red-50 border border-red-200 text-red-800 px-4 py-3 text-sm">
                        <p class="font-medium mb-1">Please fix the following:</p>
                        <ul class="list-disc list-inside space-y-0.5">
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif

                {{ $slot }}
            </main>
        </div>
    </div>
</body>
</html>
