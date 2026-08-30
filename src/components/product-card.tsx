import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/data/products";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  detail = "short",
  className,
}: {
  product: ProductCategory;
  detail?: "short" | "summary";
  className?: string;
}) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "spatial-card spatial-glass group block overflow-hidden rounded-2xl ring-1 ring-foreground/10",
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
      </div>
      <div className="p-5">
        <h2 className="font-display text-2xl text-ink">{product.name}</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {detail === "summary" ? product.summary : product.short}
        </p>
      </div>
    </Link>
  );
}
