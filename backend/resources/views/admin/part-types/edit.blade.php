<x-admin-layout>
    <x-slot name="title">Edit Part Type</x-slot>

    @include('admin.partials.simple-name-form', [
        'action' => route('admin.part-types.update', $partType),
        'method' => 'PUT',
        'model' => $partType,
        'cancelRoute' => route('admin.part-types.index'),
    ])
</x-admin-layout>
