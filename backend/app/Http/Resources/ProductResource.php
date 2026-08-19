<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'part_number' => $this->part_number,
            'description' => $this->description,
            'quality_grade' => $this->quality_grade,
            'retail_price' => $this->retail_price,
            'compare_at_price' => $this->compare_at_price,
            'wholesale_price' => $this->wholesale_price,
            'wholesale_min_qty' => $this->wholesale_min_qty,
            'stock_quantity' => $this->stock_quantity,
            'stock_status' => $this->stock_status,
            'is_featured' => $this->is_featured,
            'brand' => new BrandResource($this->whenLoaded('brand')),
            'device_model' => new DeviceModelResource($this->whenLoaded('deviceModel')),
            'category' => new CategoryResource($this->whenLoaded('category')),
            'part_type' => new PartTypeResource($this->whenLoaded('partType')),
            'images' => ProductImageResource::collection($this->whenLoaded('images')),
            'variants' => ProductVariantResource::collection($this->whenLoaded('variants')),
            'primary_image_url' => $this->whenLoaded('images', function () {
                $primary = $this->images->firstWhere('is_primary', true) ?? $this->images->first();

                return $primary?->url;
            }),
        ];
    }
}
