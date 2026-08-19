<x-admin-layout>
    <x-slot name="title">Add Wholesale Tier</x-slot>

    @include('admin.wholesale-tiers._form', [
        'action' => route('admin.wholesale-tiers.store'),
        'method' => 'POST',
        'tier' => null,
        'cancelRoute' => route('admin.wholesale-tiers.index'),
    ])
</x-admin-layout>
