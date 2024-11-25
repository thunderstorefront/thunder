import type { ShippingMethod, PaymentMethod } from './cart';
import type { Maybe } from './common';

export type CheckoutAgreement = {
  agreementId: number;
  checkboxText: string;
  content: string;
  mode: string;
  name: string;
};

export type CheckoutShipping = {
  selectedShippingMethod: Maybe<ShippingMethod>;
  availableShippingMethods: ShippingMethod[];
};

export type CheckoutPayment = {
  selectedPaymentMethod: Maybe<PaymentMethod>;
  availablePaymentMethods: PaymentMethod[];
};
