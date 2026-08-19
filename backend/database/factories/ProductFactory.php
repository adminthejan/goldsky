<?php

namespace Database\Factories;

use App\Models\Brand;
use App\Models\Category;
use App\Models\PartType;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    public function definition(): array
    {
        $name = fake()->unique()->words(3, true);
        $retail = fake()->numberBetween(1000, 20000);

        return [
            'name' => ucwords($name),
            'slug' => Str::slug($name),
            'part_number' => strtoupper(fake()->unique()->bothify('GS-???-####')),
            'description' => fake()->paragraph(),
            'brand_id' => Brand::factory(),
            'device_model_id' => null,
            'category_id' => Category::factory(),
            'part_type_id' => PartType::factory(),
            'quality_grade' => fake()->randomElement(Product::QUALITY_GRADES),
            'retail_price' => $retail,
            'compare_at_price' => fake()->boolean(30) ? (int) round($retail * fake()->randomFloat(2, 1.1, 1.3)) : null,
            'wholesale_price' => (int) round($retail * 0.8),
            'wholesale_min_qty' => fake()->randomElement([5, 10, 20]),
            'stock_quantity' => fake()->numberBetween(0, 60),
            'is_featured' => fake()->boolean(20),
            'is_active' => true,
        ];
    }
}
