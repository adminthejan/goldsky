<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\PartTypeResource;
use App\Models\PartType;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PartTypeController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        $partTypes = PartType::query()
            ->where('is_active', true)
            ->orderBy('name')
            ->get();

        return PartTypeResource::collection($partTypes);
    }
}
