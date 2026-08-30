import Link from "next/link";
import { CatalogImage } from "@/components/catalog-image";
import type { ProductCategory } from "@/data/products";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  detail = "short",
  compact = false,
  className,
}: {
  product: ProductCategory;
  detail?: "short" | "summary";
  compact?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "spatial-card spatial-glass group block overflow-hidden rounded-2xl ring-1 ring-foreground/10",
        compact && "rounded-xl",
        className
      )}
    >
      <div className={cn("relative overflow-hidden", compact ? "aspect-[16/9]" : "aspect-[16/10]")}>
        <CatalogImage
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
      </div>
      <div className={cn(compact ? "p-3" : "p-5")}>
        <h2 className={cn("font-display text-ink", compact ? "text-lg leading-tight md:text-xl" : "text-2xl")}>
          {product.name}
        </h2>
        <p className={cn("mt-1 text-muted-foreground", compact ? "line-clamp-2 text-xs md:text-sm" : "text-sm")}>
          {detail === "summary" ? product.summary : product.short}
        </p>
      </div>
    </Link>
  );
}
