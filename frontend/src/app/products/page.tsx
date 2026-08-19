import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import { getBrands, getCategories, getPartTypes, getProducts, type Product } from "@/lib/api";

export const metadata: Metadata = {
  title: "Products",
};

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-line pb-6">
      <div className="mb-4 flex items-center justify-between text-[13px] font-medium text-ink">
        {label}
        <span className="text-ink-faint">−</span>
      </div>
      {children}
    </div>
  );
}

function FilterCheckbox({
  label,
  count,
  checked = false,
  disabled = false,
}: {
  label: string;
  count: number;
  checked?: boolean;
  disabled?: boolean;
}) {
  return (
    <label
      className={`flex items-center justify-between py-1.5 text-[14px] ${
        disabled ? "text-ink-faint/60" : "text-ink-soft"
      }`}
    >
      <span className="flex items-center gap-2.5">
        <input
          type="checkbox"
          defaultChecked={checked}
          disabled={disabled}
          className="h-3.5 w-3.5 accent-ink"
        />
        {label}
      </span>
      <span className="text-[13px] text-ink-faint">({count})</span>
    </label>
  );
}

function countBy<T>(products: Product[], pick: (p: Product) => T | null | undefined): Map<T, number> {
  const counts = new Map<T, number>();
  for (const product of products) {
    const value = pick(product);
    if (value === null || value === undefined) continue;
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return counts;
}

export default async function Page() {
  const [{ items: products, total }, categories, brands, partTypes] = await Promise.all([
    getProducts({ per_page: 24 }),
    getCategories(),
    getBrands(),
    getPartTypes(),
  ]);

  const brandCounts = countBy(products, (p) => p.brand?.name);
  const categoryCounts = countBy(products, (p) => p.category?.name);
  const partTypeCounts = countBy(products, (p) => p.part_type?.name);
  const gradeCounts = countBy(products, (p) => p.quality_grade);
  const inStockCount = products.filter((p) => p.stock_status !== "Out of Stock").length;

  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} />

      <div className="mx-auto grid max-w-[1280px] gap-14 px-6 py-10 sm:grid-cols-[260px_1fr] sm:items-start sm:gap-12">
        <aside className="flex flex-col gap-6 sm:sticky sm:top-28">
          <div>
            <h1 className="mb-1 font-display text-[24px] font-semibold tracking-tight text-ink">
              All Products
            </h1>
            <p className="text-[13px] text-ink-soft">
              Genuine and OEM-grade phone parts, retail and wholesale.
            </p>
          </div>

          <FilterGroup label="Device Brand">
            {brands.length > 0 ? (
              brands.map((brand) => (
                <FilterCheckbox
                  key={brand.id}
                  label={brand.name}
                  count={brandCounts.get(brand.name) ?? 0}
                  disabled={(brandCounts.get(brand.name) ?? 0) === 0}
                />
              ))
            ) : (
              <p className="text-[13px] text-ink-faint">No brands yet.</p>
            )}
          </FilterGroup>

          <FilterGroup label="Category">
            {categories.length > 0 ? (
              categories.map((category) => (
                <FilterCheckbox
                  key={category.id}
                  label={category.name}
                  count={categoryCounts.get(category.name) ?? 0}
                  disabled={(categoryCounts.get(category.name) ?? 0) === 0}
                />
              ))
            ) : (
              <p className="text-[13px] text-ink-faint">No categories yet.</p>
            )}
          </FilterGroup>

          <FilterGroup label="Part Type">
            {partTypes.length > 0 ? (
              partTypes.map((partType) => (
                <FilterCheckbox
                  key={partType.id}
                  label={partType.name}
                  count={partTypeCounts.get(partType.name) ?? 0}
                  disabled={(partTypeCounts.get(partType.name) ?? 0) === 0}
                />
              ))
            ) : (
              <p className="text-[13px] text-ink-faint">No part types yet.</p>
            )}
          </FilterGroup>

          <FilterGroup label="Quality Grade">
            <p className="mb-3 text-[12px] leading-relaxed text-ink-faint">
              Original: factory part. OEM: made to spec by a licensed supplier. Incell: aftermarket
              panel, integrated touch layer. Aftermarket: budget replacement.
            </p>
            {(["Original", "OEM", "Incell", "Aftermarket"] as const).map((grade) => (
              <FilterCheckbox
                key={grade}
                label={grade}
                count={gradeCounts.get(grade) ?? 0}
                disabled={(gradeCounts.get(grade) ?? 0) === 0}
              />
            ))}
          </FilterGroup>

          <div>
            <div className="mb-3 text-[13px] font-medium text-ink">Availability</div>
            <FilterCheckbox label="In Stock" count={inStockCount} disabled={inStockCount === 0} />
          </div>
        </aside>

        <main>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="text-[14px] text-ink-soft">
              {total} {total === 1 ? "result" : "results"}
            </div>
            <select className="rounded-xs border border-line bg-paper px-3 py-2 text-[13px] text-ink-soft outline-none">
              <option>Sort: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  href={`/products/${product.slug}`}
                  status={product.stock_status}
                  fitLine={product.device_model ? `Fits ${product.device_model.name}` : product.category?.name ?? ""}
                  name={product.name}
                  retailPrice={product.retail_price}
                  compareAtPrice={product.compare_at_price}
                  wholesalePrice={product.wholesale_price}
                  imageSrc={product.primary_image_url}
                  variants={product.variants}
                />
              ))}
            </div>
          ) : (
            <div className="border-t border-line py-16 text-center">
              <p className="text-[15px] text-ink-soft">
                No products are listed yet — check back soon, or ask us directly on WhatsApp.
              </p>
            </div>
          )}

          <div className="mt-16 border-t border-line pt-10 text-center">
            <p className="mb-2 text-[14px] text-ink-soft">
              More listings are added every week. Looking for a part not shown here?
            </p>
            <a
              href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27m%20looking%20for%20a%20part%20that%27s%20not%20listed%20on%20the%20site."
              className="link-underline text-[14px] font-medium text-gold"
            >
              Ask us on WhatsApp →
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
