{{-- Expects: $action, $method ('POST'|'PUT'), $model (nullable) --}}
<form method="POST" action="{{ $action }}" class="bg-white rounded-lg border border-slate-200 p-6 max-w-lg">
    @csrf
    @if ($method === 'PUT')
        @method('PUT')
    @endif

    <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-slate-700 mb-1">Name</label>
        <input type="text" name="name" id="name" required
               value="{{ old('name', $model->name ?? '') }}"
               class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
        @error('name') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
    </div>

    <div class="mb-6">
        <label class="inline-flex items-center">
            <input type="hidden" name="is_active" value="0">
            <input type="checkbox" name="is_active" value="1" {{ old('is_active', $model->is_active ?? true) ? 'checked' : '' }}
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
