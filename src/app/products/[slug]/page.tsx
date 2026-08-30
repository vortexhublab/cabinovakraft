import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LiveProductLine } from "@/components/live-catalog";
import { productCategories } from "@/data/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productCategories.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = productCategories.find((c) => c.slug === slug);
  return { title: p?.name ?? "Product" };
}

export default async function ProductCategoryPage({ params }: Props) {
  const { slug } = await params;
  const p = productCategories.find((c) => c.slug === slug);
  if (!p) notFound();
  return <LiveProductLine slug={slug} />;
}
