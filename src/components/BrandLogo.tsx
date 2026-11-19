import { logoImage } from "../data/assets";
import { cn } from "../utils/cn";

export default function BrandLogo({ className }: { className?: string }) {
  if (!logoImage) return null;
  return <span className={cn("inline-flex shrink-0 items-center justify-center", className)}><img src={logoImage} alt="Salevi Poultry Farm" className="block h-full w-full object-contain" /></span>;
}