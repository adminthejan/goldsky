<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class ServiceController extends Controller
{
    public function index(): View
    {
        $services = Service::orderBy('name')->paginate(15);

        return view('admin.services.index', ['services' => $services]);
    }

    public function create(): View
    {
        return view('admin.services.create');
    }

    public function store(Request $request): RedirectResponse
    {
        Service::create($this->validated($request));

        return redirect()->route('admin.services.index')->with('success', 'Service created.');
    }

    public function edit(Service $service): View
    {
        return view('admin.services.edit', ['service' => $service]);
    }

    public function update(Request $request, Service $service): RedirectResponse
    {
        $service->update($this->validated($request, $service->id));

        return redirect()->route('admin.services.index')->with('success', 'Service updated.');
    }

    public function destroy(Service $service): RedirectResponse
    {
        $service->delete();

        return redirect()->route('admin.services.index')->with('success', 'Service deleted.');
    }

    private function validated(Request $request, ?int $ignoreId = null): array
    {
        $request->merge(['slug' => Str::slug($request->string('name'))]);

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => [Rule::unique('services', 'slug')->ignore($ignoreId)],
            'description' => ['nullable', 'string', 'max:2000'],
            'price_from' => ['required', 'integer', 'min:0'],
            'turnaround_time' => ['required', 'string', 'max:100'],
            'icon' => ['nullable', 'string', 'max:100'],
            'is_featured' => ['sometimes', 'boolean'],
            'is_active' => ['sometimes', 'boolean'],
        ], [], ['slug' => 'name']);

        $validated['is_featured'] = $request->boolean('is_featured');
        $validated['is_active'] = $request->boolean('is_active', true);

        return $validated;
    }
}
