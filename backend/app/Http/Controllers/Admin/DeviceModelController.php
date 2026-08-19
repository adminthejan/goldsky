<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\DeviceModel;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class DeviceModelController extends Controller
{
    public function index(): View
    {
        $deviceModels = DeviceModel::withCount('products')
            ->with('brand')
            ->orderBy('name')
            ->paginate(20);

        return view('admin.device-models.index', ['deviceModels' => $deviceModels]);
    }

    public function create(): View
    {
        return view('admin.device-models.create', ['brands' => Brand::orderBy('name')->get()]);
    }

    public function store(Request $request): RedirectResponse
    {
        DeviceModel::create($this->validated($request));

        return redirect()->route('admin.device-models.index')->with('success', 'Device model created.');
    }

    public function edit(DeviceModel $deviceModel): View
    {
        return view('admin.device-models.edit', [
            'deviceModel' => $deviceModel,
            'brands' => Brand::orderBy('name')->get(),
        ]);
    }

    public function update(Request $request, DeviceModel $deviceModel): RedirectResponse
    {
        $deviceModel->update($this->validated($request, $deviceModel->id));

        return redirect()->route('admin.device-models.index')->with('success', 'Device model updated.');
    }

    public function destroy(DeviceModel $deviceModel): RedirectResponse
    {
        $deviceModel->delete();

        return redirect()->route('admin.device-models.index')->with('success', 'Device model deleted.');
    }

    private function validated(Request $request, ?int $ignoreId = null): array
    {
        $request->merge(['slug' => Str::slug($request->string('name'))]);

        $validated = $request->validate([
            'brand_id' => ['required', 'exists:brands,id'],
            'name' => ['required', 'string', 'max:255'],
            'slug' => [Rule::unique('device_models', 'slug')->ignore($ignoreId)],
            'is_active' => ['sometimes', 'boolean'],
        ], [], ['slug' => 'name']);

        $validated['is_active'] = $request->boolean('is_active', true);

        return $validated;
    }
}
