import { mockCustomerOrder } from '../../../mocks';

export default defineEventHandler(() =>
  Array.from({ length: 3 }, mockCustomerOrder)
);
