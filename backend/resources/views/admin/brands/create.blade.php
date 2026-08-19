<x-admin-layout>
    <x-slot name="title">Add Brand</x-slot>

    @include('admin.partials.simple-name-form', [
        'action' => route('admin.brands.store'),
        'method' => 'POST',
        'model' => null,
        'cancelRoute' => route('admin.brands.index'),
    ])
</x-admin-layout>
