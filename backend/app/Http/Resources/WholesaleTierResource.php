<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class WholesaleTierResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'min_quantity' => $this->min_quantity,
            'discount_percentage' => $this->discount_percentage,
            'pricing_note' => $this->pricing_note,
            'description' => $this->description,
        ];
    }
}
