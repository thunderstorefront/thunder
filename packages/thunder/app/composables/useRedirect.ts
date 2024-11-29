import type { Route } from '@thunderstorefront/types';

export function useRedirect(url: string, route?: Route): void {
  const localizePath = useLocalePath();
  try {
    if (!route) {
      navigateTo(localizePath(url), { redirectCode: 301 });
      return;
    }
    if (route.type === 'Category') {
      navigateTo(localizePath(getCategoryPath(url)));
    }
    if (route.type === 'Product') {
      navigateTo(localizePath(getProductPath(url)));
    }
    if (route.type === 'Page') {
      navigateTo(localizePath(getCmsPagePath(url)));
    }
  } catch (error) {
    if (error instanceof Error) {
      throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
    }
  }
}
