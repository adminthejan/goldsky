<x-admin-layout>
    <x-slot name="title">Edit Service</x-slot>

    @include('admin.services._form', [
        'action' => route('admin.services.update', $service),
        'method' => 'PUT',
        'service' => $service,
        'cancelRoute' => route('admin.services.index'),
    ])
</x-admin-layout>
