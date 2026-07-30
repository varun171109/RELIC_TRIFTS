import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductById, getRelatedProducts, products } from "@/data/products";
import ProductDetailClient from "@/components/ProductDetailClient";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const product = getProductById(params.id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} — ${product.brand}`,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  if (!product) notFound();
  const related = getRelatedProducts(product);

  return <ProductDetailClient product={product} related={related} />;
}
