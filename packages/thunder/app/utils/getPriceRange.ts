export type PriceRangeSelect = {
  min: number;
  max: number;
};

export function getPriceRange(values: string[]): PriceRangeSelect {
  if (values.length === 0) {
    return { min: 0, max: 0 };
  }

  if (values.length === 1 && values[0]) {
    const [minStr, maxStr] = values[0].split('_');
    const min = parseInt(minStr || '0', 10);
    const max = parseInt(maxStr || '0', 10);
    return { min, max };
  }

  const minStr = values[0]?.split('_')[0] || '0';
  const maxStr = values[values.length - 1]?.split('_')[1] || '0';
  const min = parseInt(minStr, 10);
  const max = parseInt(maxStr, 10);

  return { min, max };
}
