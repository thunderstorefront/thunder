import { FetchError, type FetchOptions } from 'ofetch';
import type { CustomError, CustomErrorDetails } from '@thunderstorefront/types';
import { useNuxtApp } from '#app';
import { useClientUrl } from './useClientUrl';
import { useAuthToken } from '../state/useAuthToken';
import { useStoreToken } from '../state/useStoreToken';

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

  return async <T>(
    url: string,
    fetchOptions: FetchOptions = {}
  ): Promise<T> => {
    const { token: authToken } = useAuthToken();
    const { token: storeToken } = useStoreToken();
    const headers: Record<string, string> = {};

    if (authToken.value) {
      headers.authorization = authToken.value;
    }

    if (storeToken.value) {
      headers.store = storeToken.value;
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
