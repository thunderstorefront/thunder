import { faker } from '@faker-js/faker';
import type { CheckoutAgreement } from '@thunderstorefront/types';

// Mock for CheckoutAgreement
export const mockCheckoutAgreement = (): CheckoutAgreement => ({
  agreementId: 0,
  checkboxText: 'Accepting store rules',
  content: faker.lorem.paragraphs({ min: 4, max: 9 }),
  mode: 'MANUAL',
  name: 'store_rules'
});
