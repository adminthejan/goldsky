<x-admin-layout>
    <x-slot name="title">Add Service</x-slot>

    @include('admin.services._form', [
        'action' => route('admin.services.store'),
        'method' => 'POST',
        'service' => null,
        'cancelRoute' => route('admin.services.index'),
    ])
</x-admin-layout>
