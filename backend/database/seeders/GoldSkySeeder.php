<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Category;
use App\Models\DeviceModel;
use App\Models\PartType;
use App\Models\Product;
use App\Models\Service;
use App\Models\WholesaleTier;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class GoldSkySeeder extends Seeder
{
    public function run(): void
    {
        $brands = $this->seedBrands();
        $deviceModels = $this->seedDeviceModels($brands);
        $categories = $this->seedCategories();
        $partTypes = $this->seedPartTypes();

        $this->seedProducts($brands, $deviceModels, $categories, $partTypes);
        $this->seedServices();
        $this->seedWholesaleTiers();
    }

    /**
     * @return array<string, Brand>
     */
    private function seedBrands(): array
    {
        $brands = [];

        foreach (['Samsung', 'Apple', 'Xiaomi', 'Oppo'] as $name) {
            $brands[$name] = Brand::updateOrCreate(
                ['slug' => Str::slug($name)],
                ['name' => $name, 'is_active' => true]
            );
        }

        return $brands;
    }

    /**
     * @param  array<string, Brand>  $brands
     * @return array<string, DeviceModel>
     */
    private function seedDeviceModels(array $brands): array
    {
        $definitions = [
            'Samsung' => ['Galaxy A54', 'Galaxy S23'],
            'Apple' => ['iPhone 13', 'iPhone 14'],
            'Xiaomi' => ['Redmi Note 12'],
            'Oppo' => ['Reno 8'],
        ];

        $models = [];

        foreach ($definitions as $brandName => $modelNames) {
            foreach ($modelNames as $modelName) {
                $models[$modelName] = DeviceModel::updateOrCreate(
                    ['slug' => Str::slug($brandName.' '.$modelName)],
                    [
                        'brand_id' => $brands[$brandName]->id,
                        'name' => $modelName,
                        'is_active' => true,
                    ]
                );
            }
        }

        return $models;
    }

    /**
     * @return array<string, Category>
     */
    private function seedCategories(): array
    {
        $names = [
            'Displays & Protectors',
            'Hi-Res Audio',
            'Armor & Styling',
            'Smart Watch Accessories',
            'MagSafe Cases & Covers',
            'GaN Fast Power & Cables',
        ];

        $categories = [];

        foreach ($names as $name) {
            $categories[$name] = Category::updateOrCreate(
                ['slug' => Str::slug($name)],
                ['name' => $name, 'is_active' => true]
            );
        }

        return $categories;
    }

    /**
     * @return array<string, PartType>
     */
    private function seedPartTypes(): array
    {
        $names = ['Displays', 'Batteries', 'Charging Ports', 'Cameras', 'Cables'];

        $partTypes = [];

        foreach ($names as $name) {
            $partTypes[$name] = PartType::updateOrCreate(
                ['slug' => Str::slug($name)],
                ['name' => $name, 'is_active' => true]
            );
        }

        return $partTypes;
    }

    /**
     * @param  array<string, Brand>  $brands
     * @param  array<string, DeviceModel>  $deviceModels
     * @param  array<string, Category>  $categories
     * @param  array<string, PartType>  $partTypes
     */
    private function seedProducts(array $brands, array $deviceModels, array $categories, array $partTypes): void
    {
        $products = [
            [
                'name' => 'Samsung Galaxy A54 OLED Display',
                'part_number' => 'GS-DIS-SA54-OG',
                'description' => 'Full OLED assembly replacement for the Galaxy A54, OEM grade with true-to-original colour accuracy and touch response.',
                'brand' => 'Samsung',
                'device_model' => 'Galaxy A54',
                'category' => 'Displays & Protectors',
                'part_type' => 'Displays',
                'quality_grade' => 'OEM',
                'retail_price' => 12500,
                'compare_at_price' => null,
                'wholesale_price' => 9800,
                'wholesale_min_qty' => 5,
                'stock_quantity' => 25,
                'is_featured' => true,
                'variants' => [],
            ],
            [
                'name' => 'GaN 65W Fast Charger',
                'part_number' => 'GS-CHG-GAN65',
                'description' => 'Compact GaN power adapter, 65W USB-C PD output — fast-charges phones, tablets and light laptops from a single port.',
                'brand' => null,
                'device_model' => null,
                'category' => 'GaN Fast Power & Cables',
                'part_type' => null,
                'quality_grade' => 'Original',
                'retail_price' => 6500,
                'compare_at_price' => 7500,
                'wholesale_price' => 5200,
                'wholesale_min_qty' => 10,
                'stock_quantity' => 40,
                'is_featured' => true,
                'variants' => [],
            ],
            [
                'name' => 'MagSafe Silicone Case — iPhone 14',
                'part_number' => 'GS-CASE-MS14',
                'description' => 'MagSafe-compatible silicone case with soft microfibre lining and built-in magnet ring for iPhone 14.',
                'brand' => 'Apple',
                'device_model' => 'iPhone 14',
                'category' => 'MagSafe Cases & Covers',
                'part_type' => null,
                'quality_grade' => 'Aftermarket',
                'retail_price' => 3200,
                'compare_at_price' => 3800,
                'wholesale_price' => 2400,
                'wholesale_min_qty' => 10,
                'stock_quantity' => 3,
                'is_featured' => false,
                'variants' => [
                    ['label' => 'Black', 'swatch_hex' => '#1c1c1e'],
                    ['label' => 'Clear', 'swatch_hex' => '#f5f5f0'],
                    ['label' => 'Sunset Orange', 'swatch_hex' => '#d97a4a'],
                ],
            ],
            [
                'name' => 'Smart Watch Silicone Band — 20mm',
                'part_number' => 'GS-BAND-SW20',
                'description' => 'Universal 20mm silicone replacement band, sweat-resistant, fits most smart watches with standard quick-release pins.',
                'brand' => null,
                'device_model' => null,
                'category' => 'Smart Watch Accessories',
                'part_type' => null,
                'quality_grade' => 'Aftermarket',
                'retail_price' => 1800,
                'compare_at_price' => null,
                'wholesale_price' => 1300,
                'wholesale_min_qty' => 20,
                'stock_quantity' => 0,
                'is_featured' => false,
                'variants' => [
                    ['label' => 'Black', 'swatch_hex' => '#1c1c1e'],
                    ['label' => 'Navy', 'swatch_hex' => '#1e3a5f'],
                    ['label' => 'Sand', 'swatch_hex' => '#d8c3a5'],
                ],
            ],
        ];

        foreach ($products as $data) {
            $product = Product::updateOrCreate(
                ['part_number' => $data['part_number']],
                [
                    'name' => $data['name'],
                    'slug' => Str::slug($data['name']),
                    'description' => $data['description'],
                    'brand_id' => $data['brand'] ? $brands[$data['brand']]->id : null,
                    'device_model_id' => $data['device_model'] ? $deviceModels[$data['device_model']]->id : null,
                    'category_id' => $categories[$data['category']]->id,
                    'part_type_id' => $data['part_type'] ? $partTypes[$data['part_type']]->id : null,
                    'quality_grade' => $data['quality_grade'],
                    'retail_price' => $data['retail_price'],
                    'compare_at_price' => $data['compare_at_price'],
                    'wholesale_price' => $data['wholesale_price'],
                    'wholesale_min_qty' => $data['wholesale_min_qty'],
                    'stock_quantity' => $data['stock_quantity'],
                    'is_featured' => $data['is_featured'],
                    'is_active' => true,
                ]
            );

            $product->variants()->delete();
            foreach ($data['variants'] as $i => $variant) {
                $product->variants()->create([
                    'label' => $variant['label'],
                    'swatch_hex' => $variant['swatch_hex'],
                    'sort_order' => $i,
                ]);
            }
        }
    }

    private function seedServices(): void
    {
        $services = [
            [
                'name' => 'Chip-Level Motherboard Repair',
                'description' => 'Component-level diagnosis and repair for motherboard faults — power ICs, short circuits, and data recovery.',
                'price_from' => 3500,
                'turnaround_time' => '24–48 hrs',
                'is_featured' => true,
            ],
            [
                'name' => 'Screen Replacement',
                'description' => 'Cracked or unresponsive screen replaced with a quality-matched display, calibrated before handover.',
                'price_from' => 4500,
                'turnaround_time' => 'Same day',
                'is_featured' => true,
            ],
            [
                'name' => 'Battery Replacement',
                'description' => 'Swap a degraded battery for a fresh one to restore full-day battery life.',
                'price_from' => 2800,
                'turnaround_time' => 'Same day',
                'is_featured' => true,
            ],
            [
                'name' => 'Charging Port Repair',
                'description' => 'Fix loose, unresponsive, or damaged charging ports — cleaning or full port replacement as needed.',
                'price_from' => 2200,
                'turnaround_time' => 'Same day',
                'is_featured' => false,
            ],
            [
                'name' => 'Water Damage Recovery',
                'description' => 'Full ultrasonic cleaning and corrosion treatment for water-exposed devices, with component-level repair if required.',
                'price_from' => 5000,
                'turnaround_time' => '48–72 hrs',
                'is_featured' => false,
            ],
            [
                'name' => 'Camera Repair',
                'description' => 'Repair or replacement for blurry, cracked, or non-functional front and rear camera modules.',
                'price_from' => 3200,
                'turnaround_time' => '24–48 hrs',
                'is_featured' => false,
            ],
        ];

        foreach ($services as $data) {
            Service::updateOrCreate(
                ['slug' => Str::slug($data['name'])],
                [
                    'name' => $data['name'],
                    'description' => $data['description'],
                    'price_from' => $data['price_from'],
                    'turnaround_time' => $data['turnaround_time'],
                    'is_featured' => $data['is_featured'],
                    'is_active' => true,
                ]
            );
        }
    }

    private function seedWholesaleTiers(): void
    {
        $tiers = [
            [
                'name' => 'Bronze',
                'min_quantity' => 5,
                'discount_percentage' => 10,
                'pricing_note' => '5+ units',
                'description' => 'Entry-level wholesale pricing for small repair shops.',
                'sort_order' => 1,
            ],
            [
                'name' => 'Silver',
                'min_quantity' => 20,
                'discount_percentage' => 15,
                'pricing_note' => '20+ units',
                'description' => 'Better margins for regular bulk buyers.',
                'sort_order' => 2,
            ],
            [
                'name' => 'Gold',
                'min_quantity' => 50,
                'discount_percentage' => 20,
                'pricing_note' => '50+ units — contact for fixed pricing',
                'description' => 'Best pricing for high-volume partners; contact us to arrange fixed contract pricing.',
                'sort_order' => 3,
            ],
        ];

        foreach ($tiers as $data) {
            WholesaleTier::updateOrCreate(
                ['name' => $data['name']],
                $data + ['is_active' => true]
            );
        }
    }
}
