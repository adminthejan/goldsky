<x-admin-layout>
    <x-slot name="title">Edit Device Model</x-slot>

    @include('admin.device-models._form', [
        'action' => route('admin.device-models.update', $deviceModel),
        'method' => 'PUT',
        'deviceModel' => $deviceModel,
        'brands' => $brands,
        'cancelRoute' => route('admin.device-models.index'),
    ])
</x-admin-layout>
