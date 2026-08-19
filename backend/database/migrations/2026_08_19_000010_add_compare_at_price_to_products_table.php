<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            // A former/list price shown struck through next to retail_price to
            // surface a genuine markdown (e.g. "-15%"). Null means "not on sale"
            // — the storefront never fabricates a discount from wholesale vs
            // retail, since those represent different purchase terms, not a
            // promotion.
            $table->unsignedInteger('compare_at_price')->nullable()->after('retail_price');
        });
    }

    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn('compare_at_price');
        });
    }
};
