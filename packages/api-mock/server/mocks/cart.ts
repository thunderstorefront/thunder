import { faker } from '@faker-js/faker';
import type {
  AvailableShippingMethod,
  Cart,
  CartBillingAddress,
  CartDiscount,
  CartItemPrices,
  CartPrices,
  CartShippingAddress,
  ShippingMethod
} from '@thunderstorefront/types';
import { mockAddress, mockMoney } from './common';
import { CART_ID } from './const';

// Mock for ShippingMethod
export const mockShippingMethod = (): ShippingMethod => ({
  carrierCode: faker.string.uuid(),
  carrierTitle: faker.company.name(),
  methodCode: faker.string.uuid(),
  methodTitle: faker.company.name(),
  amount: mockMoney(faker.number.int({ min: 10, max: 50 }))
});

// Mock for AvailableShippingMethod
export const mockAvailableShippingMethod = (): AvailableShippingMethod => ({
  ...mockShippingMethod(),
  available: faker.datatype.boolean()
});

// Mock for CartBillingAddress
export const mockCartBillingAddress = (): CartBillingAddress => mockAddress();

// Mock for CartShippingAddress
export const mockCartShippingAddress = (): CartShippingAddress => ({
  availableShippingMethods: Array.from(
    { length: 3 },
    mockAvailableShippingMethod
  ),
  selectedShippingMethod: mockShippingMethod()
});

// Mock for CartItemPrices
export const mockCartItemPrices = (): CartItemPrices => ({
  price: mockMoney()
});

// Mock for CartDiscount
export const mockCartDiscount = (): CartDiscount => ({
  amount: mockMoney(),
  label: faker.lorem.words()
});

// Mock for CartPrices
export const mockCartPrices = (): CartPrices => ({
  subtotal: mockMoney(),
  grandTotal: mockMoney(),
  discount: Array.from({ length: 3 }, mockCartDiscount)
});

// Mock for Cart
export const mockCart = (): Cart => ({
  email: faker.internet.email(),
  id: CART_ID,
  isVirtual: faker.datatype.boolean(),
  items: [],
  prices: mockCartPrices(),
  totalQuantity: 0,
  billingAddress: mockCartBillingAddress(),
  shippingAddresses: Array.from({ length: 3 }, mockCartShippingAddress),
  selectedPaymentMethod: {
    code: 'card_payment',
    title: 'Card payment'
  },
  availablePaymentMethods: [
    {
      code: 'card_payment',
      title: 'Card Payment'
    },
    {
      code: 'bank_transfer',
      title: 'Bank Transfer'
    },
    {
      code: 'paypal_payment',
      title: 'PayPal Payment'
    }
  ]
});
