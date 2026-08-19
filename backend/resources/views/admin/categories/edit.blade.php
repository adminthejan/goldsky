<x-admin-layout>
    <x-slot name="title">Edit Category</x-slot>

    @include('admin.categories._form', [
        'action' => route('admin.categories.update', $category),
        'method' => 'PUT',
        'category' => $category,
        'parents' => $parents,
        'cancelRoute' => route('admin.categories.index'),
    ])
</x-admin-layout>
