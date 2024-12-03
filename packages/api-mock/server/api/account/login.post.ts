import { CUSTOMER_ID } from '../../mocks/const';

export default defineEventHandler((event): { token: string } => {
  return { token: CUSTOMER_ID };
});
