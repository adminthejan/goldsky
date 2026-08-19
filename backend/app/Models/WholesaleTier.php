<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WholesaleTier extends Model
{
    /** @use HasFactory<\Database\Factories\WholesaleTierFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'min_quantity',
        'discount_percentage',
        'pricing_note',
        'description',
        'sort_order',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'min_quantity' => 'integer',
            'discount_percentage' => 'integer',
            'sort_order' => 'integer',
            'is_active' => 'boolean',
        ];
    }
}
