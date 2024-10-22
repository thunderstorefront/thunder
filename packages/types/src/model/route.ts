import { Page } from './content';
import { Product } from './product';
import { CategoryItem } from './category';

export type Routes = 'Category' | 'Product' | 'Page';

export type RouteData<T extends Routes> = {
  type: T;
  redirectCode: number;
  relativeUrl: string;
};

export type RoutePage = RouteData<'Page'> & Pick<Page, 'title' | 'slug' | 'id'>;

export type RouteProduct = RouteData<'Product'> &
  Pick<Product, 'title' | 'slug' | 'id'>;

export type RouteCategory = RouteData<'Category'> &
  Pick<CategoryItem, 'title' | 'slug' | 'id'>;

export type Route = RouteCategory | RoutePage | RouteProduct;
