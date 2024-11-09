export function getCategoryPath(slug: string): string {
  return `${ROUTES.category}/${slug}`;
}

export function getCmsPagePath(slug: string): string {
  return `${ROUTES.content}/${slug}`;
}

export function getProductPath(slug: string): string {
  return `${ROUTES.product}/${slug}`;
}
