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
      className={cn("look spatial-card group block", className)}
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <CatalogImage
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/25 to-transparent" />
      </div>
      <div className={cn(compact ? "p-3" : "p-5")}>
        <h2
          className={cn(
            "font-display tracking-tight text-ink",
            compact ? "type-title text-[1.25rem] md:text-[1.4rem]" : "type-title"
          )}
        >
          {product.name}
        </h2>
        <p
          className={cn(
            "mt-1 text-muted-foreground",
            compact ? "line-clamp-2 text-xs md:text-sm" : "text-sm"
          )}
        >
          {detail === "summary" ? product.summary : product.short}
        </p>
      </div>
    </Link>
  );
}
