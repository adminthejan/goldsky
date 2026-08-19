<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\WholesaleTier>
 */
class WholesaleTierFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => fake()->unique()->randomElement(['Bronze', 'Silver', 'Gold', 'Platinum']),
            'min_quantity' => fake()->randomElement([5, 20, 50, 100]),
            'discount_percentage' => fake()->numberBetween(5, 25),
            'pricing_note' => null,
            'description' => fake()->sentence(),
            'sort_order' => fake()->numberBetween(0, 10),
            'is_active' => true,
        ];
    }
}
