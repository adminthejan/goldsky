{{-- Expects: $action, $method, $tier (nullable), $cancelRoute --}}
<form method="POST" action="{{ $action }}" class="bg-white rounded-lg border border-slate-200 p-6 max-w-lg">
    @csrf
    @if ($method === 'PUT')
        @method('PUT')
    @endif

    <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-slate-700 mb-1">Name</label>
        <input type="text" name="name" id="name" required placeholder="e.g. Gold / 50+ units"
               value="{{ old('name', $tier->name ?? '') }}"
               class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
        @error('name') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
    </div>

    <div class="mb-4 grid grid-cols-2 gap-4">
        <div>
            <label for="min_quantity" class="block text-sm font-medium text-slate-700 mb-1">Min quantity</label>
            <input type="number" min="1" name="min_quantity" id="min_quantity" required
                   value="{{ old('min_quantity', $tier->min_quantity ?? '') }}"
                   class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            @error('min_quantity') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
        </div>
        <div>
            <label for="discount_percentage" class="block text-sm font-medium text-slate-700 mb-1">Discount %</label>
            <input type="number" min="0" max="100" name="discount_percentage" id="discount_percentage"
                   value="{{ old('discount_percentage', $tier->discount_percentage ?? '') }}"
                   class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            @error('discount_percentage') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
        </div>
    </div>

    <div class="mb-4">
        <label for="pricing_note" class="block text-sm font-medium text-slate-700 mb-1">Pricing note</label>
        <input type="text" name="pricing_note" id="pricing_note" placeholder="e.g. Contact for fixed pricing"
               value="{{ old('pricing_note', $tier->pricing_note ?? '') }}"
               class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
        @error('pricing_note') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
    </div>

    <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-slate-700 mb-1">Description</label>
        <textarea name="description" id="description" rows="3"
                  class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">{{ old('description', $tier->description ?? '') }}</textarea>
        @error('description') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
    </div>

    <div class="mb-4">
        <label for="sort_order" class="block text-sm font-medium text-slate-700 mb-1">Sort order</label>
        <input type="number" min="0" name="sort_order" id="sort_order"
               value="{{ old('sort_order', $tier->sort_order ?? 0) }}"
               class="block w-32 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
        @error('sort_order') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
    </div>

    <div class="mb-6">
        <label class="inline-flex items-center">
            <input type="hidden" name="is_active" value="0">
            <input type="checkbox" name="is_active" value="1" {{ old('is_active', $tier->is_active ?? true) ? 'checked' : '' }}
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
