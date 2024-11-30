import type { Region } from '@thunderstorefront/types';
import { useCountry } from './useCountry';

export interface UseRegion {
  getRegions: (countryCode: string) => Promise<Region[]>;
}

export function useRegion(): UseRegion {
  const { countries, findCountry, updateCountries } = useCountry();

  async function getRegions(countryCode: string): Promise<Region[]> {
    if (countries.value.length === 0) {
      await updateCountries();
    }

    const country = await findCountry(countryCode);

    if (!country) throw new Error('Region cannot be found');

    return country.availableRegions;
  }

  return {
    getRegions
  };
}
