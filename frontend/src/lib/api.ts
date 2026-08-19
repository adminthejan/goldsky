/**
 * Thin client for the GoldSky Laravel API (backend/routes/api.php).
 * Server Components call these directly; every function returns `null`
 * (or an empty list) on failure instead of throwing, so a page can render
 * a graceful empty state if the backend is unreachable.
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1";

export type Brand = {
  id: number;
  name: string;
  slug: string;
  logo_url: string | null;
};

export type DeviceModel = {
  id: number;
  name: string;
  slug: string;
  brand?: Brand | null;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  parent_id: number | null;
  children?: Category[];
};

export type PartType = {
  id: number;
  name: string;
  slug: string;
};

export type ProductImage = {
  id: number;
  url: string;
  sort_order: number;
  is_primary: boolean;
};

export type StockStatus = "In Stock" | "Low Stock" | "Out of Stock";

export type ProductVariant = {
  id: number;
  label: string;
  /** Hex swatch color (e.g. "#1c1c1e"), or null for a text-only variant. */
  swatch_hex: string | null;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  part_number: string;
  description: string | null;
  quality_grade: "Original" | "OEM" | "Incell" | "Aftermarket";
  retail_price: number;
  /** Former/list price shown struck through when set — a genuine markdown, never derived from the wholesale price. */
  compare_at_price: number | null;
  wholesale_price: number | null;
  wholesale_min_qty: number | null;
  stock_quantity: number;
  stock_status: StockStatus;
  is_featured: boolean;
  brand?: Brand | null;
  device_model?: DeviceModel | null;
  category?: Category | null;
  part_type?: PartType | null;
  images?: ProductImage[];
  variants?: ProductVariant[];
  primary_image_url: string | null;
};

export type Service = {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  price_from: number;
  turnaround_time: string;
  icon: string | null;
  is_featured: boolean;
};

export type WholesaleTier = {
  id: number;
  name: string;
  min_quantity: number;
  discount_percentage: number | null;
  pricing_note: string | null;
  description: string | null;
};

type Paginated<T> = {
  data: T[];
  meta?: { total?: number; current_page?: number; last_page?: number };
};

export type ProductQuery = {
  brand?: string;
  model?: string;
  category?: string;
  part_type?: string;
  quality_grade?: string;
  stock_status?: string;
  search?: string;
  sort?: string;
  page?: number;
  per_page?: number;
};

async function apiFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      // Storefront data changes via the admin panel; avoid stale caching
      // while keeping this simple (no revalidation tags needed yet).
      cache: "no-store",
    });

    if (!res.ok) return null;

    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getProducts(query: ProductQuery = {}): Promise<{ items: Product[]; total: number }> {
  const params = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== "") params.set(key, String(value));
  });

  const qs = params.toString();
  const result = await apiFetch<Paginated<Product>>(`/products${qs ? `?${qs}` : ""}`);

  return { items: result?.data ?? [], total: result?.meta?.total ?? result?.data?.length ?? 0 };
}

export async function getProduct(slug: string): Promise<Product | null> {
  const result = await apiFetch<{ data: Product }>(`/products/${slug}`);
  return result?.data ?? null;
}

export async function getServices(): Promise<Service[]> {
  const result = await apiFetch<{ data: Service[] }>("/services");
  return result?.data ?? [];
}

export async function getService(slug: string): Promise<Service | null> {
  const result = await apiFetch<{ data: Service }>(`/services/${slug}`);
  return result?.data ?? null;
}

export async function getCategories(): Promise<Category[]> {
  const result = await apiFetch<{ data: Category[] }>("/categories");
  return result?.data ?? [];
}

export async function getBrands(): Promise<Brand[]> {
  const result = await apiFetch<{ data: Brand[] }>("/brands");
  return result?.data ?? [];
}

export async function getPartTypes(): Promise<PartType[]> {
  const result = await apiFetch<{ data: PartType[] }>("/part-types");
  return result?.data ?? [];
}

export async function getWholesaleTiers(): Promise<WholesaleTier[]> {
  const result = await apiFetch<{ data: WholesaleTier[] }>("/wholesale-tiers");
  return result?.data ?? [];
}

export function formatLkr(amount: number): string {
  return `LKR ${amount.toLocaleString("en-LK")}`;
}
