<x-admin-layout>
    <x-slot name="title">Add Product</x-slot>

    @include('admin.products._form', [
        'action' => route('admin.products.store'),
        'method' => 'POST',
        'product' => null,
        'brands' => $brands,
        'deviceModels' => $deviceModels,
        'categories' => $categories,
        'partTypes' => $partTypes,
        'qualityGrades' => $qualityGrades,
        'cancelRoute' => route('admin.products.index'),
    ])
</x-admin-layout>
