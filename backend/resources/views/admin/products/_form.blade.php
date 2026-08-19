{{-- Expects: $action, $method, $product (nullable), $brands, $deviceModels, $categories, $partTypes, $qualityGrades, $cancelRoute --}}
<form method="POST" action="{{ $action }}" enctype="multipart/form-data" class="bg-white rounded-lg border border-slate-200 p-6 max-w-3xl space-y-6">
    @csrf
    @if ($method === 'PUT')
        @method('PUT')
    @endif

    <div class="grid grid-cols-2 gap-4">
        <div class="col-span-2">
            <label for="name" class="block text-sm font-medium text-slate-700 mb-1">Product name</label>
            <input type="text" name="name" id="name" required
                   value="{{ old('name', $product->name ?? '') }}"
                   class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            @error('name') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
        </div>

        <div>
            <label for="part_number" class="block text-sm font-medium text-slate-700 mb-1">Part number (SKU)</label>
            <input type="text" name="part_number" id="part_number" required
                   value="{{ old('part_number', $product->part_number ?? '') }}"
                   class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            @error('part_number') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
        </div>

        <div>
            <label for="quality_grade" class="block text-sm font-medium text-slate-700 mb-1">Quality grade</label>
            <select name="quality_grade" id="quality_grade" required class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                @foreach ($qualityGrades as $grade)
                    <option value="{{ $grade }}" {{ old('quality_grade', $product->quality_grade ?? 'OEM') === $grade ? 'selected' : '' }}>{{ $grade }}</option>
                @endforeach
            </select>
            @error('quality_grade') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
        </div>

        <div class="col-span-2">
            <label for="description" class="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea name="description" id="description" rows="3"
                      class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">{{ old('description', $product->description ?? '') }}</textarea>
            @error('description') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
        </div>

        <div>
            <div class="flex items-center justify-between mb-1">
                <label for="brand_id" class="block text-sm font-medium text-slate-700">Brand</label>
                <a href="{{ route('admin.brands.create') }}" target="_blank" class="text-xs text-indigo-600 hover:underline">+ Add new</a>
            </div>
            <select name="brand_id" id="brand_id" class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                <option value="">— None —</option>
                @foreach ($brands as $brand)
                    <option value="{{ $brand->id }}" {{ (int) old('brand_id', $product->brand_id ?? '') === $brand->id ? 'selected' : '' }}>{{ $brand->name }}</option>
                @endforeach
            </select>
            @error('brand_id') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
        </div>

        <div>
            <div class="flex items-center justify-between mb-1">
                <label for="device_model_id" class="block text-sm font-medium text-slate-700">Device model</label>
                <a href="{{ route('admin.device-models.create') }}" target="_blank" class="text-xs text-indigo-600 hover:underline">+ Add new</a>
            </div>
            <select name="device_model_id" id="device_model_id" class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                <option value="">— None / universal —</option>
                @foreach ($deviceModels as $model)
                    <option value="{{ $model->id }}" {{ (int) old('device_model_id', $product->device_model_id ?? '') === $model->id ? 'selected' : '' }}>
                        {{ $model->brand?->name }} {{ $model->name }}
                    </option>
                @endforeach
            </select>
            @error('device_model_id') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
        </div>

        <div>
            <div class="flex items-center justify-between mb-1">
                <label for="category_id" class="block text-sm font-medium text-slate-700">Category</label>
                <a href="{{ route('admin.categories.create') }}" target="_blank" class="text-xs text-indigo-600 hover:underline">+ Add new</a>
            </div>
            <select name="category_id" id="category_id" class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                <option value="">— None —</option>
                @foreach ($categories as $category)
                    <option value="{{ $category->id }}" {{ (int) old('category_id', $product->category_id ?? '') === $category->id ? 'selected' : '' }}>{{ $category->name }}</option>
                @endforeach
            </select>
            @error('category_id') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
        </div>

        <div>
            <div class="flex items-center justify-between mb-1">
                <label for="part_type_id" class="block text-sm font-medium text-slate-700">Part type</label>
                <a href="{{ route('admin.part-types.create') }}" target="_blank" class="text-xs text-indigo-600 hover:underline">+ Add new</a>
            </div>
            <select name="part_type_id" id="part_type_id" class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                <option value="">— None —</option>
                @foreach ($partTypes as $partType)
                    <option value="{{ $partType->id }}" {{ (int) old('part_type_id', $product->part_type_id ?? '') === $partType->id ? 'selected' : '' }}>{{ $partType->name }}</option>
                @endforeach
            </select>
            @error('part_type_id') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
        </div>
    </div>

    <div class="border-t border-slate-200 pt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
            <label for="retail_price" class="block text-sm font-medium text-slate-700 mb-1">Retail price (LKR)</label>
            <input type="number" min="0" name="retail_price" id="retail_price" required
                   value="{{ old('retail_price', $product->retail_price ?? '') }}"
                   class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            @error('retail_price') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
        </div>
        <div>
            <label for="compare_at_price" class="block text-sm font-medium text-slate-700 mb-1">Compare-at price (LKR)</label>
            <input type="number" min="0" name="compare_at_price" id="compare_at_price"
                   value="{{ old('compare_at_price', $product->compare_at_price ?? '') }}"
                   class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            @error('compare_at_price') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
            <p class="mt-1 text-xs text-slate-400">Optional. Former price shown struck through — must be higher than retail. Leave blank when not on sale.</p>
        </div>
        <div>
            <label for="wholesale_price" class="block text-sm font-medium text-slate-700 mb-1">Wholesale price (LKR)</label>
            <input type="number" min="0" name="wholesale_price" id="wholesale_price"
                   value="{{ old('wholesale_price', $product->wholesale_price ?? '') }}"
                   class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            @error('wholesale_price') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
        </div>
        <div>
            <label for="wholesale_min_qty" class="block text-sm font-medium text-slate-700 mb-1">Wholesale min qty</label>
            <input type="number" min="1" name="wholesale_min_qty" id="wholesale_min_qty"
                   value="{{ old('wholesale_min_qty', $product->wholesale_min_qty ?? '') }}"
                   class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            @error('wholesale_min_qty') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
        </div>
        <div>
            <label for="stock_quantity" class="block text-sm font-medium text-slate-700 mb-1">Stock quantity</label>
            <input type="number" min="0" name="stock_quantity" id="stock_quantity" required
                   value="{{ old('stock_quantity', $product->stock_quantity ?? 0) }}"
                   class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            @error('stock_quantity') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
            <p class="mt-1 text-xs text-slate-400">
                Status auto-derives: 0 = Out of Stock, &lt;{{ \App\Models\Product::LOW_STOCK_THRESHOLD }} = Low Stock, else In Stock.
            </p>
        </div>
    </div>

    <div class="border-t border-slate-200 pt-6 space-y-2">
        <label class="inline-flex items-center">
            <input type="hidden" name="is_featured" value="0">
            <input type="checkbox" name="is_featured" value="1" {{ old('is_featured', $product->is_featured ?? false) ? 'checked' : '' }}
                   class="rounded border-slate-300 text-indigo-600 shadow-sm focus:ring-indigo-500">
            <span class="ms-2 text-sm text-slate-700">Featured</span>
        </label>
        <label class="flex items-center">
            <input type="hidden" name="is_active" value="0">
            <input type="checkbox" name="is_active" value="1" {{ old('is_active', $product->is_active ?? true) ? 'checked' : '' }}
                   class="rounded border-slate-300 text-indigo-600 shadow-sm focus:ring-indigo-500">
            <span class="ms-2 text-sm text-slate-700">Active (visible on storefront)</span>
        </label>
    </div>

    <div class="border-t border-slate-200 pt-6">
        <label for="images" class="block text-sm font-medium text-slate-700 mb-1">
            {{ isset($product) ? 'Add more images' : 'Images' }}
        </label>
        <input type="file" name="images[]" id="images" multiple accept="image/png,image/jpeg,image/webp"
               class="block w-full text-sm text-slate-600 file:mr-4 file:rounded-md file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-slate-700">
        <p class="mt-1 text-xs text-slate-400">JPEG, PNG or WEBP, up to 4MB each.</p>
        @error('images') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
        @error('images.*') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror

        @isset($product)
            @if ($product->images->isNotEmpty())
                <div class="mt-4 grid grid-cols-4 gap-3">
                    @foreach ($product->images as $image)
                        <div class="relative border border-slate-200 rounded-md p-2">
                            <img src="{{ $image->url }}" alt="" class="h-20 w-full object-cover rounded">
                            <label class="mt-1 flex items-center gap-1 text-xs text-slate-600">
                                <input type="radio" name="primary_image_id" value="{{ $image->id }}" {{ $image->is_primary ? 'checked' : '' }}>
                                Primary
                            </label>
                        </div>
                    @endforeach
                </div>
                <p class="mt-2 text-xs text-slate-400">Choosing "Primary" and hitting Save above applies it. Use Delete below to remove an image.</p>
                <div class="mt-2 flex flex-wrap gap-3">
                    @foreach ($product->images as $image)
                        <form method="POST" action="{{ route('admin.products.images.destroy', [$product, $image]) }}" onsubmit="return confirm('Remove this image?');">
                            @csrf @method('DELETE')
                            <button type="submit" class="text-xs text-red-600 hover:underline">Delete image #{{ $loop->iteration }}</button>
                        </form>
                    @endforeach
                </div>
            @endif
        @endisset
    </div>

    <div class="border-t border-slate-200 pt-6">
        <label class="block text-sm font-medium text-slate-700 mb-1">Variants (optional)</label>
        <p class="mb-3 text-xs text-slate-400">
            Selectable options shown as swatches on the storefront (e.g. colors). The chosen variant is
            included in the customer's WhatsApp enquiry — it doesn't carry its own price or stock.
        </p>

        <div id="variant-rows" class="space-y-2">
            @php $existingVariants = old('variants', isset($product) ? $product->variants->map(fn ($v) => ['label' => $v->label, 'swatch_hex' => $v->swatch_hex])->all() : []); @endphp
            @foreach ($existingVariants as $i => $variant)
                <div class="variant-row flex items-center gap-2">
                    <input type="color" name="variants[{{ $i }}][swatch_hex]" value="{{ $variant['swatch_hex'] ?: '#888888' }}"
                           class="h-9 w-9 shrink-0 rounded border border-slate-300 p-0.5">
                    <input type="text" name="variants[{{ $i }}][label]" value="{{ $variant['label'] }}" placeholder="e.g. Midnight Black"
                           class="block w-full max-w-xs rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <button type="button" class="variant-remove text-xs text-red-600 hover:underline">Remove</button>
                </div>
            @endforeach
        </div>
        <button type="button" id="variant-add" class="mt-3 text-xs font-medium text-indigo-600 hover:underline">+ Add variant</button>
        @error('variants.*.label') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
        @error('variants.*.swatch_hex') <p class="mt-1 text-sm text-red-600">A swatch color must be a valid hex code.</p> @enderror
    </div>

    <div class="flex items-center gap-3">
        <button type="submit" class="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
            Save
        </button>
        <a href="{{ $cancelRoute }}" class="text-sm text-slate-600 hover:underline">Cancel</a>
    </div>
</form>

<script>
    (function () {
        const rows = document.getElementById('variant-rows');
        const addBtn = document.getElementById('variant-add');
        let nextIndex = rows.children.length;

        function makeRow() {
            const i = nextIndex++;
            const row = document.createElement('div');
            row.className = 'variant-row flex items-center gap-2';
            row.innerHTML = `
                <input type="color" name="variants[${i}][swatch_hex]" value="#888888" class="h-9 w-9 shrink-0 rounded border border-slate-300 p-0.5">
                <input type="text" name="variants[${i}][label]" placeholder="e.g. Midnight Black" class="block w-full max-w-xs rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                <button type="button" class="variant-remove text-xs text-red-600 hover:underline">Remove</button>
            `;
            return row;
        }

        addBtn.addEventListener('click', () => rows.appendChild(makeRow()));

        rows.addEventListener('click', (e) => {
            if (e.target.classList.contains('variant-remove')) {
                e.target.closest('.variant-row').remove();
            }
        });
    })();
</script>
