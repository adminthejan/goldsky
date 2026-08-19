<x-admin-layout>
    <x-slot name="title">Edit Brand</x-slot>

    @include('admin.partials.simple-name-form', [
        'action' => route('admin.brands.update', $brand),
        'method' => 'PUT',
        'model' => $brand,
        'cancelRoute' => route('admin.brands.index'),
    ])
</x-admin-layout>
