<x-admin-layout>
    <x-slot name="title">Edit Wholesale Tier</x-slot>

    @include('admin.wholesale-tiers._form', [
        'action' => route('admin.wholesale-tiers.update', $tier),
        'method' => 'PUT',
        'tier' => $tier,
        'cancelRoute' => route('admin.wholesale-tiers.index'),
    ])
</x-admin-layout>
