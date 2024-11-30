import { faker } from '@faker-js/faker';
import type {
  CheckoutAgreement,
  CheckoutPayment,
  CheckoutShipping,
  ShippingMethod
} from '@thunderstorefront/types';
import { mockMoney } from './common';

const SHIPPING_METHODS = ['self_pickup', 'post_delivery', 'dhl'];

export const mockShippingMethod = (methodCode: string): ShippingMethod => ({
  carrierCode: faker.string.uuid(),
  carrierTitle: faker.company.name(),
  methodCode,
  methodTitle: faker.company.name(),
  amount: mockMoney(faker.number.int({ min: 10, max: 50 })),
  active: true
});

export const mockCheckoutAgreement = (): CheckoutAgreement => ({
  agreementId: 0,
  checkboxText: 'Accepting store rules',
  content: faker.lorem.paragraphs({ min: 4, max: 9 }),
  mode: 'MANUAL',
  name: 'store_rules'
});

export const mockCheckoutShipping = (): CheckoutShipping => ({
  availableShippingMethods: SHIPPING_METHODS.map((code) =>
    mockShippingMethod(code)
  ),
  selectedShippingMethod: mockShippingMethod(SHIPPING_METHODS[0] as string)
});

export const mockCheckoutPayment = (): CheckoutPayment => ({
  selectedPaymentMethod: {
    code: 'card_payment',
    title: 'Card payment',
    active: true
  },
  availablePaymentMethods: [
    {
      code: 'card_payment',
      title: 'Card Payment',
      active: true
    },
    {
      code: 'bank_transfer',
      title: 'Bank Transfer',
      active: true
    },
    {
      code: 'paypal_payment',
      title: 'PayPal Payment',
      active: true
    }
  ]
});
