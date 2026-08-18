import type { Metadata } from "next";
import ProductDetailClient from "@/components/ProductDetailClient";

export const metadata: Metadata = {
  title: "Samsung Galaxy A54 OLED Display",
};

const ldJson =
  '{"@context":"https://schema.org","@type":"Product","name":"Samsung Galaxy A54 OLED Display","sku":"GS-DIS-SA54-OG","brand":"Samsung","offers":{"@type":"Offer","priceCurrency":"LKR","price":"12500","availability":"https://schema.org/InStock"}}';

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson }} />
      <ProductDetailClient />
    </>
  );
}
