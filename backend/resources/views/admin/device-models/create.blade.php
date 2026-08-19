<x-admin-layout>
    <x-slot name="title">Add Device Model</x-slot>

    @include('admin.device-models._form', [
        'action' => route('admin.device-models.store'),
        'method' => 'POST',
        'deviceModel' => null,
        'brands' => $brands,
        'cancelRoute' => route('admin.device-models.index'),
    ])
</x-admin-layout>
