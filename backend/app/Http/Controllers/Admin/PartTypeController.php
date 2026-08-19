<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PartType;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class PartTypeController extends Controller
{
    public function index(): View
    {
        $partTypes = PartType::withCount('products')->orderBy('name')->paginate(15);

        return view('admin.part-types.index', ['partTypes' => $partTypes]);
    }

    public function create(): View
    {
        return view('admin.part-types.create');
    }

    public function store(Request $request): RedirectResponse
    {
        PartType::create($this->validated($request));

        return redirect()->route('admin.part-types.index')->with('success', 'Part type created.');
    }

    public function edit(PartType $partType): View
    {
        return view('admin.part-types.edit', ['partType' => $partType]);
    }

    public function update(Request $request, PartType $partType): RedirectResponse
    {
        $partType->update($this->validated($request, $partType->id));

        return redirect()->route('admin.part-types.index')->with('success', 'Part type updated.');
    }

    public function destroy(PartType $partType): RedirectResponse
    {
        $partType->delete();

        return redirect()->route('admin.part-types.index')->with('success', 'Part type deleted.');
    }

    private function validated(Request $request, ?int $ignoreId = null): array
    {
        $request->merge(['slug' => Str::slug($request->string('name'))]);

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => [Rule::unique('part_types', 'slug')->ignore($ignoreId)],
            'is_active' => ['sometimes', 'boolean'],
        ], [], ['slug' => 'name']);

        $validated['is_active'] = $request->boolean('is_active', true);

        return $validated;
    }
}
