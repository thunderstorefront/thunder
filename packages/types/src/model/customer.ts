import type { Address } from './address';
import type { Money } from './money';

export type CustomerAddress = Address & {
  id: number;
  company: string;
  defaultBilling: boolean;
  defaultShipping: boolean;
};

export type Customer = {
  defaultBilling: string;
  defaultShipping: string;
  dob: string;
  email: string;
  firstName: string;
  gender: string;
  groupId: number;
  id: number;
  isSubscribed: boolean;
  lastName: string;
  prefix: string;
  suffix: string;
  vat: string;
};

export type CustomerOrderItem = {
  productName: string;
  productId: string;
  productSlug: string;
  productSalePrice: Money;
  quantityOrdered: number;
  quantityShipped: number;
  quantityCanceled: number;
  quantityInvoiced: number;
  quantityRefunded: number;
  quantityReturned: number;
};

export type CustomerOrderShipment = {
  trackingNumber: string;
};

export type CustomerOrderTotal = {
  grandTotal: Money;
};

export type CustomerOrder = {
  number: string;
  orderDate: string;
  shipments: CustomerOrderShipment[];
  total: CustomerOrderTotal;
  items: CustomerOrderItem[];
};
