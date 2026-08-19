<x-admin-layout>
    <x-slot name="title">Edit Product</x-slot>

    @include('admin.products._form', [
        'action' => route('admin.products.update', $product),
        'method' => 'PUT',
        'product' => $product,
        'brands' => $brands,
        'deviceModels' => $deviceModels,
        'categories' => $categories,
        'partTypes' => $partTypes,
        'qualityGrades' => $qualityGrades,
        'cancelRoute' => route('admin.products.index'),
    ])
</x-admin-layout>
