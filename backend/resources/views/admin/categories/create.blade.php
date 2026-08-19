<x-admin-layout>
    <x-slot name="title">Add Category</x-slot>

    @include('admin.categories._form', [
        'action' => route('admin.categories.store'),
        'method' => 'POST',
        'category' => null,
        'parents' => $parents,
        'cancelRoute' => route('admin.categories.index'),
    ])
</x-admin-layout>
