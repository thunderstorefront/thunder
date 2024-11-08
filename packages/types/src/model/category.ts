import type { Image } from './media';
import type { Tree } from './common';

export type CategoryBreadcrumb = {
  categoryId: string;
  categoryTitle: string;
  categorySlug: string;
  categoryLevel: number;
};

export type CategoryItem = {
  id: string;
  title: string;
  slug: string;
  productCount: number;
  includeInMenu: boolean;
  position: number;
  level: number;
  image: Image;
  description: string;
  breadcrumbs: CategoryBreadcrumb[];
};

export type Category = Tree<CategoryItem>;
