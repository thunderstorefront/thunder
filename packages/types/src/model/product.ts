import type { Money } from './money';
import type { Image } from './media';
import type { Category } from './category';
import type { Filter } from './filter';
import type { SortField } from './sort';
import type { PageInfo } from './pagination';

export type ProductType = 'SimpleProduct' | 'ConfigurableProduct';

export type PriceRange = {
  minPrice: Money;
  maxPrice?: Money;
};

export type ProductVariant = {
  id: string;
  title: string;
  slug: string;
  thumbnail: Image;
  priceRange: PriceRange;
  inStock: boolean;
};

export type ProductOptionValue = {
  id: string;
  label: string;
  hexColor?: string;
};

export type ProductOption = {
  id: string;
  name: string;
  values: ProductOptionValue[];
};

export type Product = {
  type: ProductType;
  id: string;
  title: string;
  slug: string;
  image: Image;
  thumbnail: Image;
  shortDescription: string;
  description: string;
  priceRange: PriceRange;
  ratingSummary: number;
  reviewCount: number;
  variants: ProductVariant[];
  options: ProductOption[];
  inStock: boolean;
  metadata: Record<string, unknown>;
};

export type ProductPage = Product & {
  mediaGallery: Image[];
  categories: Category[];
};

export type ProductList = {
  items: Product[];
  filters: Filter[];
  sort: SortField;
  pageInfo: PageInfo;
  totalCount: number;
};
