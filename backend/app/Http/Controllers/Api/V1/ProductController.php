<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProductController extends Controller
{
    public function index(Request $request): AnonymousResourceCollection
    {
        $query = Product::query()
            ->with(['brand', 'deviceModel', 'category', 'partType', 'images', 'variants'])
            ->where('is_active', true);

        $query->when($request->filled('brand'), fn ($q) => $q->whereHas(
            'brand', fn ($b) => $b->where('slug', $request->string('brand'))
        ));

        $query->when($request->filled('model'), fn ($q) => $q->whereHas(
            'deviceModel', fn ($m) => $m->where('slug', $request->string('model'))
        ));

        $query->when($request->filled('category'), fn ($q) => $q->whereHas(
            'category', fn ($c) => $c->where('slug', $request->string('category'))
        ));

        $query->when($request->filled('part_type'), fn ($q) => $q->whereHas(
            'partType', fn ($p) => $p->where('slug', $request->string('part_type'))
        ));

        $query->when($request->filled('quality_grade'), fn ($q) => $q->where(
            'quality_grade', $request->string('quality_grade')
        ));

        $query->when($request->filled('stock_status'), fn ($q) => $q->stockStatus(
            $request->string('stock_status')->toString()
        ));

        $query->when($request->filled('search'), function ($q) use ($request) {
            $term = '%'.$request->string('search').'%';
            $q->where(function ($q) use ($term) {
                $q->where('name', 'like', $term)
                    ->orWhere('part_number', 'like', $term)
                    ->orWhere('description', 'like', $term);
            });
        });

        match ($request->string('sort')->toString()) {
            'price_asc' => $query->orderBy('retail_price'),
            'price_desc' => $query->orderByDesc('retail_price'),
            'name' => $query->orderBy('name'),
            'newest' => $query->orderByDesc('created_at'),
            default => $query->orderByDesc('is_featured')->orderByDesc('created_at'),
        };

        $perPage = (int) $request->integer('per_page', 12);

        return ProductResource::collection(
            $query->paginate($perPage > 0 ? min($perPage, 60) : 12)->withQueryString()
        );
    }

    public function show(Product $product): ProductResource
    {
        abort_unless($product->is_active, 404);

        $product->load(['brand', 'deviceModel', 'category', 'partType', 'images', 'variants']);

        return new ProductResource($product);
    }
}
