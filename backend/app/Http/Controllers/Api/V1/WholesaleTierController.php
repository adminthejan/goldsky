<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\WholesaleTierResource;
use App\Models\WholesaleTier;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class WholesaleTierController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        $tiers = WholesaleTier::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('min_quantity')
            ->get();

        return WholesaleTierResource::collection($tiers);
    }
}
