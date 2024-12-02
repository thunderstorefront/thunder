import type { Country } from '@thunderstorefront/types';

export interface UseCountryApi<TCountry = Country> {
  fetchCountries: () => Promise<TCountry[]>;
}

export function useCountryApi(): UseCountryApi {
  const client = useClient();

  async function fetchCountries(): Promise<Country[]> {
    return await client('/api/countries');
  }

  return {
    fetchCountries
  };
}
