import type { Route } from '@thunderstorefront/types';

export function useRedirect(url: string, route: Route | null): void {
  const localePath = useLocalePath();
  try {
    if (!route) {
      navigateTo(localePath(url), { redirectCode: 301 });
      return;
    }
    if (route.type === 'Category') {
      navigateTo(localePath(getCategoryPath(url)));
    }
    if (route.type === 'Product') {
      navigateTo(localePath(getProductPath(url)));
    }
    if (route.type === 'Page') {
      navigateTo(localePath(getCmsPagePath(url)));
    }
  } catch (error) {
    if (error instanceof Error) {
      throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
    }
  }
}
