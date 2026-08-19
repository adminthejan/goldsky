<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;

    public const LOW_STOCK_THRESHOLD = 5;

    public const QUALITY_GRADES = ['Original', 'OEM', 'Incell', 'Aftermarket'];

    protected $fillable = [
        'name',
        'slug',
        'part_number',
        'description',
        'brand_id',
        'device_model_id',
        'category_id',
        'part_type_id',
        'quality_grade',
        'retail_price',
        'compare_at_price',
        'wholesale_price',
        'wholesale_min_qty',
        'stock_quantity',
        'is_featured',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'retail_price' => 'integer',
            'compare_at_price' => 'integer',
            'wholesale_price' => 'integer',
            'wholesale_min_qty' => 'integer',
            'stock_quantity' => 'integer',
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
        ];
    }

    protected $appends = ['stock_status'];

    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class);
    }

    public function deviceModel(): BelongsTo
    {
        return $this->belongsTo(DeviceModel::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function partType(): BelongsTo
    {
        return $this->belongsTo(PartType::class);
    }

    public function images(): HasMany
    {
        return $this->hasMany(ProductImage::class)->orderBy('sort_order');
    }

    public function variants(): HasMany
    {
        return $this->hasMany(ProductVariant::class)->orderBy('sort_order');
    }

    public function primaryImage(): HasMany
    {
        return $this->images()->where('is_primary', true);
    }

    public function inquiries(): HasMany
    {
        return $this->hasMany(Inquiry::class);
    }

    /**
     * Derived stock status — always computed from stock_quantity so it can
     * never drift out of sync with the actual number in stock.
     */
    public function getStockStatusAttribute(): string
    {
        return static::stockStatusFor($this->stock_quantity);
    }

    public static function stockStatusFor(int $quantity): string
    {
        return match (true) {
            $quantity <= 0 => 'Out of Stock',
            $quantity < self::LOW_STOCK_THRESHOLD => 'Low Stock',
            default => 'In Stock',
        };
    }

    public function scopeStockStatus($query, ?string $status)
    {
        return match ($status) {
            'In Stock' => $query->where('stock_quantity', '>=', self::LOW_STOCK_THRESHOLD),
            'Low Stock' => $query->whereBetween('stock_quantity', [1, self::LOW_STOCK_THRESHOLD - 1]),
            'Out of Stock' => $query->where('stock_quantity', '<=', 0),
            default => $query,
        };
    }
}
