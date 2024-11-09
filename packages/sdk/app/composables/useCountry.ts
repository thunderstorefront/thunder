import type { Country } from '@thunderstorefront/types';

export interface UseCountry {
  countries: Ref<Country[]>;
  findCountry: (countryCode: string) => Promise<Country>;
  fetchCountries: () => Promise<Country[]>;
  updateCountries: () => Promise<Country[]>;
}

export function useCountry(): UseCountry {
  const client = useClient();
  const countries = useState<Country[]>('countries', () => []);

  async function fetchCountries(): Promise<Country[]> {
    return await client('/api/countries');
  }

  async function findCountry(countryCode: string): Promise<Country> {
    const country = countries.value.find(
      (country) => country?.twoLetterAbbreviation === countryCode
    );

    if (!country) {
      throw new Error('Failed to find country');
    }

    return country;
  }

  async function updateCountries(): Promise<Country[]> {
    countries.value = await fetchCountries();
    return countries.value;
  }

  return {
    countries,
    findCountry,
    fetchCountries,
    updateCountries
  };
}
