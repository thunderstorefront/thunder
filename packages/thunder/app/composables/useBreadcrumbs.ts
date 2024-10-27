import type { Breadcrumb } from '../types/breadcrumb';

export interface UseBreadcrumbs {
  breadcrumbs: Ref<Breadcrumb[]>;
  setBreadcrumbs: (breadcrumbs: Breadcrumb[]) => void;
  clearBreadcrumbs: () => void;
}

export function useBreadcrumbs(): UseBreadcrumbs {
  const breadcrumbs = useState<Breadcrumb[]>('breadcrumbs', () => []);

  function setBreadcrumbs(payload: Breadcrumb[]) {
    breadcrumbs.value = [...payload];
  }

  function clearBreadcrumbs() {
    breadcrumbs.value = [];
  }

  return {
    breadcrumbs,
    setBreadcrumbs,
    clearBreadcrumbs
  };
}
