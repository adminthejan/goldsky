<?php

use App\Http\Controllers\Api\V1\BrandController;
use App\Http\Controllers\Api\V1\CategoryController;
use App\Http\Controllers\Api\V1\InquiryController;
use App\Http\Controllers\Api\V1\PartTypeController;
use App\Http\Controllers\Api\V1\ProductController;
use App\Http\Controllers\Api\V1\ServiceController;
use App\Http\Controllers\Api\V1\WholesaleTierController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->name('api.v1.')->group(function () {
    Route::get('products', [ProductController::class, 'index'])->name('products.index');
    Route::get('products/{product:slug}', [ProductController::class, 'show'])->name('products.show');

    Route::get('services', [ServiceController::class, 'index'])->name('services.index');
    Route::get('services/{service:slug}', [ServiceController::class, 'show'])->name('services.show');

    Route::get('categories', [CategoryController::class, 'index'])->name('categories.index');
    Route::get('brands', [BrandController::class, 'index'])->name('brands.index');
    Route::get('part-types', [PartTypeController::class, 'index'])->name('part-types.index');
    Route::get('wholesale-tiers', [WholesaleTierController::class, 'index'])->name('wholesale-tiers.index');

    Route::post('inquiries', [InquiryController::class, 'store'])->name('inquiries.store');
});
