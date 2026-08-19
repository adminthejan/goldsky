import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailClient from "@/components/ProductDetailClient";
import { getProduct } from "@/lib/api";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  return { title: product?.name ?? "Product" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  const ldJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.part_number,
    brand: product.brand?.name,
    offers: {
      "@type": "Offer",
      priceCurrency: "LKR",
      price: String(product.retail_price),
      availability:
        product.stock_status === "Out of Stock"
          ? "https://schema.org/OutOfStock"
          : "https://schema.org/InStock",
    },
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson }} />
      <ProductDetailClient product={product} />
    </>
  );
}
