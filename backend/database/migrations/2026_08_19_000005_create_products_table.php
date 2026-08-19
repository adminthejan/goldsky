<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('part_number')->unique();
            $table->text('description')->nullable();

            $table->foreignId('brand_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('device_model_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('category_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('part_type_id')->nullable()->constrained()->nullOnDelete();

            $table->enum('quality_grade', ['Original', 'OEM', 'Incell', 'Aftermarket'])->default('OEM');

            $table->unsignedInteger('retail_price');
            $table->unsignedInteger('wholesale_price')->nullable();
            $table->unsignedInteger('wholesale_min_qty')->nullable();

            $table->unsignedInteger('stock_quantity')->default(0);

            $table->boolean('is_featured')->default(false);
            $table->boolean('is_active')->default(true);

            $table->timestamps();

            $table->index(['is_active', 'is_featured']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
