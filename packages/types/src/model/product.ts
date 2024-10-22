import { Money } from './money';
import { Image } from './media';
import { Category } from './category';
import { Filter } from './filter';
import { SortField } from './sort';
import { PageInfo } from './pagination';

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

export type Product = {
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
  variants?: ProductVariant[];
  inStock: boolean;
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
