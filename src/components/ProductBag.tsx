import { Image } from "lucide-react";
import { productImages } from "../data/assets";
import type { Product } from "../data/products";
import { cn } from "../utils/cn";

export default function ProductBag({ product, className }: { product: Product; className?: string }) {
  const image = productImages[product.key];
  return (
    <div className={cn("relative overflow-hidden bg-forest-900", className)}>
      {image ? (
        <img src={image} alt={product.name} className="h-full w-full object-contain" loading="lazy" />
      ) : (
        <div className="flex h-full min-h-[200px] flex-col items-center justify-center gap-3 px-6 text-center text-cream-50/70">
          <Image className="h-10 w-10 text-gold-400" aria-hidden="true" />
          <p className="font-display text-xl font-semibold text-white">{product.name}</p>
          <p className="text-xs font-semibold">Original product photo to be added</p>
        </div>
      )}
    </div>
  );
}