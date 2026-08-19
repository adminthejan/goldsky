{{-- Expects: $action, $method, $service (nullable), $cancelRoute --}}
<form method="POST" action="{{ $action }}" class="bg-white rounded-lg border border-slate-200 p-6 max-w-xl">
    @csrf
    @if ($method === 'PUT')
        @method('PUT')
    @endif

    <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-slate-700 mb-1">Name</label>
        <input type="text" name="name" id="name" required
               value="{{ old('name', $service->name ?? '') }}"
               class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
        @error('name') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
    </div>

    <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-slate-700 mb-1">Description</label>
        <textarea name="description" id="description" rows="3"
                  class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">{{ old('description', $service->description ?? '') }}</textarea>
        @error('description') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
    </div>

    <div class="mb-4 grid grid-cols-2 gap-4">
        <div>
            <label for="price_from" class="block text-sm font-medium text-slate-700 mb-1">Price from (LKR)</label>
            <input type="number" min="0" name="price_from" id="price_from" required
                   value="{{ old('price_from', $service->price_from ?? '') }}"
                   class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            @error('price_from') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
        </div>
        <div>
            <label for="turnaround_time" class="block text-sm font-medium text-slate-700 mb-1">Turnaround time</label>
            <input type="text" name="turnaround_time" id="turnaround_time" required placeholder="e.g. Same day"
                   value="{{ old('turnaround_time', $service->turnaround_time ?? '') }}"
                   class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            @error('turnaround_time') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
        </div>
    </div>

    <div class="mb-4">
        <label for="icon" class="block text-sm font-medium text-slate-700 mb-1">Icon (optional)</label>
        <input type="text" name="icon" id="icon" placeholder="e.g. wrench, battery, droplet"
               value="{{ old('icon', $service->icon ?? '') }}"
               class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
        @error('icon') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
    </div>

    <div class="mb-6 space-y-2">
        <label class="inline-flex items-center">
            <input type="hidden" name="is_featured" value="0">
            <input type="checkbox" name="is_featured" value="1" {{ old('is_featured', $service->is_featured ?? false) ? 'checked' : '' }}
                   class="rounded border-slate-300 text-indigo-600 shadow-sm focus:ring-indigo-500">
            <span class="ms-2 text-sm text-slate-700">Featured</span>
        </label>
        <label class="flex items-center">
            <input type="hidden" name="is_active" value="0">
            <input type="checkbox" name="is_active" value="1" {{ old('is_active', $service->is_active ?? true) ? 'checked' : '' }}
                   class="rounded border-slate-300 text-indigo-600 shadow-sm focus:ring-indigo-500">
            <span class="ms-2 text-sm text-slate-700">Active</span>
        </label>
    </div>

    <div class="flex items-center gap-3">
        <button type="submit" class="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
            Save
        </button>
        <a href="{{ $cancelRoute }}" class="text-sm text-slate-600 hover:underline">Cancel</a>
    </div>
</form>
