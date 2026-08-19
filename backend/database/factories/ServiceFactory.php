<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Service>
 */
class ServiceFactory extends Factory
{
    public function definition(): array
    {
        $name = fake()->unique()->words(3, true).' repair';

        return [
            'name' => ucwords($name),
            'slug' => Str::slug($name),
            'description' => fake()->sentence(),
            'price_from' => fake()->numberBetween(1500, 8000),
            'turnaround_time' => fake()->randomElement(['Same day', '24–48 hrs', '48–72 hrs']),
            'icon' => null,
            'is_featured' => fake()->boolean(20),
            'is_active' => true,
        ];
    }
}
