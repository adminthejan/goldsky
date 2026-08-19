<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\WholesaleTier;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class WholesaleTierController extends Controller
{
    public function index(): View
    {
        $tiers = WholesaleTier::orderBy('sort_order')->orderBy('min_quantity')->paginate(15);

        return view('admin.wholesale-tiers.index', ['tiers' => $tiers]);
    }

    public function create(): View
    {
        return view('admin.wholesale-tiers.create');
    }

    public function store(Request $request): RedirectResponse
    {
        WholesaleTier::create($this->validated($request));

        return redirect()->route('admin.wholesale-tiers.index')->with('success', 'Wholesale tier created.');
    }

    public function edit(WholesaleTier $wholesaleTier): View
    {
        return view('admin.wholesale-tiers.edit', ['tier' => $wholesaleTier]);
    }

    public function update(Request $request, WholesaleTier $wholesaleTier): RedirectResponse
    {
        $wholesaleTier->update($this->validated($request));

        return redirect()->route('admin.wholesale-tiers.index')->with('success', 'Wholesale tier updated.');
    }

    public function destroy(WholesaleTier $wholesaleTier): RedirectResponse
    {
        $wholesaleTier->delete();

        return redirect()->route('admin.wholesale-tiers.index')->with('success', 'Wholesale tier deleted.');
    }

    private function validated(Request $request): array
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'min_quantity' => ['required', 'integer', 'min:1'],
            'discount_percentage' => ['nullable', 'integer', 'min:0', 'max:100'],
            'pricing_note' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:1000'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
            'is_active' => ['sometimes', 'boolean'],
        ]);

        $validated['sort_order'] = $validated['sort_order'] ?? 0;
        $validated['is_active'] = $request->boolean('is_active', true);

        return $validated;
    }
}
