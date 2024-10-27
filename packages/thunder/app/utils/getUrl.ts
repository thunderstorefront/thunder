export function getCategoryPath(slug: string): string {
  return `${paths.category}/${slug}`;
}

export function getCmsPagePath(slug: string): string {
  return `${paths.content}/${slug}`;
}

export function getProductPath(slug: string): string {
  return `${paths.product}/${slug}`;
}
