import { faker } from '@faker-js/faker';
import type {
  Cart,
  CartBillingAddress,
  CartDiscount,
  CartItemPrices,
  CartPrices,
  CartShippingAddress
} from '@thunderstorefront/types';
import { mockAddress, mockMoney } from './common';
import { CART_ID } from './const';

// Mock for CartBillingAddress
export const mockCartBillingAddress = (): CartBillingAddress => mockAddress();

// Mock for CartShippingAddress
export const mockCartShippingAddress = (): CartShippingAddress => mockAddress();

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
  shippingAddresses: [mockCartShippingAddress()]
});
