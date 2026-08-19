<x-admin-layout>
    <x-slot name="title">Add Part Type</x-slot>

    @include('admin.partials.simple-name-form', [
        'action' => route('admin.part-types.store'),
        'method' => 'POST',
        'model' => null,
        'cancelRoute' => route('admin.part-types.index'),
    ])
</x-admin-layout>
