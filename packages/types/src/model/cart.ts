import type { Maybe } from './common';
import type { Money } from './money';
import type { Address } from './address';
import type { Product } from './product';

export type PaymentMethod = {
  code: string;
  title: string;
};

export type ShippingMethod = {
  carrierCode: string;
  carrierTitle: string;
  methodCode: string;
  methodTitle: string;
  amount: Money;
};

export type AvailableShippingMethod = ShippingMethod & {
  available: boolean;
};

export type CartBillingAddress = Address;

export type CartShippingAddress = {
  availableShippingMethods: AvailableShippingMethod[];
  selectedShippingMethod: ShippingMethod | null;
};

export type CartItemPrices = {
  price: Money;
};

export type CartItem = {
  id: string;
  quantity: number;
  product: Product;
  prices: CartItemPrices;
};

export type CartDiscount = {
  amount: Money;
  label: string;
};

export type CartPrices = {
  subtotal: Money;
  grandTotal: Money;
  discount: CartDiscount[];
};

export type Cart = {
  email: string;
  id: string;
  isVirtual: boolean;
  items: CartItem[];
  prices: CartPrices;
  totalQuantity: number;
  billingAddress: Maybe<CartBillingAddress>;
  shippingAddresses: CartShippingAddress[];
  selectedPaymentMethod: Maybe<PaymentMethod>;
  availablePaymentMethods: PaymentMethod[];
};
