import { CUSTOMER_ID } from '../../mocks/const';

export default defineEventHandler((event): { token: string } => {
  console.log(event.context.params);
  return { token: CUSTOMER_ID };
});
