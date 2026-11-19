export type FeedKey = "layer" | "broiler";
export type ChickKey = "ruster" | "hybrid" | "broilerChicks";
export type ProductKey = FeedKey | ChickKey;

export type Product = {
  key: ProductKey;
  category: "feed" | "chick";
  name: string;
  shortName: string;
  audience: string;
  description: string;
  price: number;
  unit: "50kg bag" | "chick";
};

export const products: Record<ProductKey, Product> = {
  layer: {
    key: "layer",
    category: "feed",
    name: "Salevi Layer Concentrate",
    shortName: "Layer",
    audience: "Layer chickens",
    description: "A premium poultry concentrate developed for layer chickens.",
    price: 95000,
    unit: "50kg bag",
  },
  broiler: {
    key: "broiler",
    category: "feed",
    name: "Salevi Broiler Concentrate",
    shortName: "Broiler",
    audience: "Broiler chickens",
    description: "A quality poultry concentrate developed for broiler chickens.",
    price: 96000,
    unit: "50kg bag",
  },
  ruster: {
    key: "ruster",
    category: "chick",
    name: "SLV Ruster Kienyeji",
    shortName: "SLV Ruster",
    audience: "Kienyeji farmers",
    description: "Day-old Kienyeji chicks from Salevi Poultry Farm.",
    price: 2500,
    unit: "chick",
  },
  hybrid: {
    key: "hybrid",
    category: "chick",
    name: "Salevi Elite Hybrid Layer",
    shortName: "Elite Hybrid Layer",
    audience: "Layer farmers",
    description: "Day-old hybrid layer chicks from Salevi Poultry Farm.",
    price: 4200,
    unit: "chick",
  },
  broilerChicks: {
    key: "broilerChicks",
    category: "chick",
    name: "Broiler Chicks",
    shortName: "Broiler Chicks",
    audience: "Broiler farmers",
    description: "Day-old broiler chicks from Salevi Poultry Farm.",
    price: 2200,
    unit: "chick",
  },
};

export const productKeys: FeedKey[] = ["layer", "broiler"];
export const chickProductKeys: ChickKey[] = ["ruster", "hybrid", "broilerChicks"];
export const allProductKeys: ProductKey[] = [...productKeys, ...chickProductKeys];

export function formatPrice(price: number) {
  return `TSh ${price.toLocaleString("en-US")}`;
}