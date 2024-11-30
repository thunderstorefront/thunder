import type { Country } from '@thunderstorefront/types';
import type { Ref } from 'vue';
import { useState } from '#app';
import { useCountryApi } from '../api/useCountryApi';

export interface UseCountry {
  countries: Ref<Country[]>;
  findCountry: (countryCode: string) => Promise<Country>;
  updateCountries: () => Promise<Country[]>;
}

export function useCountry(): UseCountry {
  const countries = useState<Country[]>('countries', () => []);
  const { fetchCountries } = useCountryApi();

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
    updateCountries
  };
}
