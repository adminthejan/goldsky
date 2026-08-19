<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Inquiry>
 */
class InquiryFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'phone' => fake()->phoneNumber(),
            'message' => fake()->sentence(),
            'product_id' => null,
            'service_id' => null,
            'source' => fake()->randomElement(['whatsapp', 'contact_form']),
        ];
    }
}
