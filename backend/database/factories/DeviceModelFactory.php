<?php

namespace Database\Factories;

use App\Models\Brand;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DeviceModel>
 */
class DeviceModelFactory extends Factory
{
    public function definition(): array
    {
        $name = 'Model '.fake()->unique()->bothify('??-###');

        return [
            'brand_id' => Brand::factory(),
            'name' => $name,
            'slug' => Str::slug($name),
            'is_active' => true,
        ];
    }
}
