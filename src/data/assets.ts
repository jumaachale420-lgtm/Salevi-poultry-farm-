import type { ProductKey } from "./products";

const logoFiles = import.meta.glob<string>("../assets/salevi-logo.{png,jpg,jpeg,webp}", { eager: true, query: "?url&no-inline", import: "default" });
const layerFiles = import.meta.glob<string>("../assets/salevi-layer-public.{png,jpg,jpeg,webp}", { eager: true, query: "?url&no-inline", import: "default" });
const broilerFiles = import.meta.glob<string>("../assets/salevi-broiler-public.{png,jpg,jpeg,webp}", { eager: true, query: "?url&no-inline", import: "default" });
const rusterFiles = import.meta.glob<string>("../assets/salevi-ruster-public.{png,jpg,jpeg,webp}", { eager: true, query: "?url&no-inline", import: "default" });
const hybridFiles = import.meta.glob<string>("../assets/salevi-hybrid-public.{png,jpg,jpeg,webp}", { eager: true, query: "?url&no-inline", import: "default" });
const broilerChickFiles = import.meta.glob<string>("../assets/salevi-broiler-chicks-public.{png,jpg,jpeg,webp}", { eager: true, query: "?url&no-inline", import: "default" });

export const logoImage = Object.values(logoFiles)[0];

export const productImages: Partial<Record<ProductKey, string>> = {
  layer: Object.values(layerFiles)[0],
  broiler: Object.values(broilerFiles)[0],
  ruster: Object.values(rusterFiles)[0],
  hybrid: Object.values(hybridFiles)[0],
  broilerChicks: Object.values(broilerChickFiles)[0],
};