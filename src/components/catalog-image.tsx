import Image from "next/image";
import { cn } from "@/lib/utils";

export function CatalogImage({
  src,
  alt,
  className,
  fill,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
}) {
  if (!src) return <div className={cn("bg-muted", className)} />;
  if (src.startsWith("data:") || src.startsWith("blob:")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={cn(fill && "absolute inset-0 h-full w-full", className)} />
    );
  }
  if (fill) {
    return <Image src={src} alt={alt} fill sizes={sizes} className={className} />;
  }
  return <Image src={src} alt={alt} width={640} height={400} className={className} />;
}
