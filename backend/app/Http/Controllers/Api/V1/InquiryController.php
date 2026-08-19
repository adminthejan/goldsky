<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Inquiry;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class InquiryController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['nullable', 'string', 'max:255'],
            'phone' => ['nullable', 'string', 'max:50'],
            'message' => ['nullable', 'string', 'max:2000'],
            'product_id' => ['nullable', 'exists:products,id'],
            'service_id' => ['nullable', 'exists:services,id'],
            'source' => ['nullable', 'string', 'max:100'],
        ]);

        $inquiry = Inquiry::create($validated);

        return response()->json(['message' => 'Inquiry logged.', 'id' => $inquiry->id], 201);
    }
}
