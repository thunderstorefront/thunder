import { mockCustomer } from '../../mocks';

export default defineEventHandler((event) => {
  return mockCustomer();
});
