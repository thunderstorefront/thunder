import { faker } from '@faker-js/faker';
import type { Address, Country, Money, Region } from '@thunderstorefront/types';

// Mock for Region
export const mockRegion = (): Region => ({
  code: faker.location.state({ abbreviated: true }),
  id: faker.number.int(),
  name: faker.location.state()
});

// Mock for Country
export const mockCountry = (): Country => ({
  fullNameLocale: faker.location.country(),
  twoLetterAbbreviation: faker.location.countryCode(),
  threeLetterAbbreviation: faker.location.countryCode().toUpperCase(),
  availableRegions: Array.from({ length: 3 }, mockRegion)
});

// Mock for Address
export const mockAddress = (): Address => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  street: Array.from({ length: 2 }, faker.location.streetAddress),
  city: faker.location.city(),
  country: faker.location.country(),
  region: faker.location.state(),
  postcode: faker.location.zipCode(),
  telephone: faker.phone.number()
});

// Mock for Money
export const mockMoney = (value?: number): Money => ({
  currency: 'USD',
  value: value ?? faker.number.float({ min: 50, max: 5000, multipleOf: 0.01 })
});
