import { FetchError, type FetchOptions } from 'ofetch';
import type { CustomError, CustomErrorDetails } from '@thunderstorefront/types';

const defaultError = (err: FetchError): CustomError => ({
  error: {
    status: 500,
    name: 'UnknownError',
    message: err.message,
    details: err as unknown as CustomErrorDetails
  }
});

export const useClient = () => {
  const nuxt = useNuxtApp();
  const baseURL = useClientUrl();
  const { token } = useAuth();

  return async <T>(
    url: string,
    fetchOptions: FetchOptions = {}
  ): Promise<T> => {
    const headers: HeadersInit = {};

    if (token.value) {
      headers.Authorization = token.value;
    }

    try {
      // @ts-expect-error method is not explicitly typed
      return await $fetch<T>(url, {
        baseURL,
        ...fetchOptions,
        headers: {
          ...headers,
          ...fetchOptions.headers
        }
      });
    } catch (err: unknown) {
      let e;
      if (err instanceof FetchError) {
        e = err.data || defaultError(err);
      } else if (err instanceof Error) {
        e = defaultError(err);
      } else {
        e = defaultError(new Error('Unknown error'));
      }

      await nuxt.hooks.callHook('client:error', e);
      throw e;
    }
  };
};

declare module '#app' {
  interface RuntimeNuxtHooks {
    'client:error': (error: CustomError) => void;
  }
}
