import { stores } from '../../../data/stores';

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id');
  return stores.find((store) => store.storeId === id);
});
