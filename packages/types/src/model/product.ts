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

export type ProductOptionValue = {
  id: string;
  label: string;
  code: string;
};

export type ProductOption = {
  code: string;
  id: string;
  name: string;
  values: ProductOptionValue[];
};

export type ProductVariant = {
  id: string;
  title: string;
  slug: string;
  thumbnail: Image;
  priceRange: PriceRange;
  inStock: boolean;
  optionValues: ProductOptionValue[];
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

export type ProductPageExtension = {
  mediaGallery: Image[];
  categories: Category[];
};

export type ProductPage = Product & ProductPageExtension;

export type ProductList = {
  items: Product[];
  filters: Filter[];
  sort: SortField;
  pageInfo: PageInfo;
  totalCount: number;
};
