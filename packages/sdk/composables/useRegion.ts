import type { Region } from '@thunderstorefront/types';

export interface UseRegion {
  getRegions: (countryCode: string) => Promise<Region[]>;
}

export function useRegion(): UseRegion {
  const loading = useState<boolean>('regionsLoading', () => false);
  const { findCountry } = useCountry();

  async function getRegions(countryCode: string): Promise<Region[]> {
    try {
      loading.value = true;

      const country = await findCountry(countryCode);

      if (!country) throw new Error('Region cannot be found');

      return country.availableRegions;
    } finally {
      loading.value = false;
    }
  }

  return {
    getRegions
  };
}
