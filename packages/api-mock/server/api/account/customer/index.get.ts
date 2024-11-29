import { mockCustomer } from '../../../mocks';

export default defineEventHandler((event) => {
  const headers = getHeaders(event);

  if (!headers.authorization) throw new Error('Authorization is required');

  return mockCustomer();
});
