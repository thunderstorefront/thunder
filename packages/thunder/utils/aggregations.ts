import type { Filter } from '@thunderstorefront/types';

export function excludeCategory(filters: Filter[], search?: boolean): Filter[] {
  return filters.filter((filter: Filter) => {
    if (search) {
      return true;
    }

    return filter.attributeCode !== 'categoryId';
  });
}

export function getAggregationOptionLabel(label: string) {
  if (label === '0') {
    return 'messages.general.yes';
  }
  if (label === '1') {
    return 'messages.general.no';
  }
  return label;
}
