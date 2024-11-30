import { useRuntimeConfig } from '#app';

export const useClientUrl = (): string | undefined => {
  const config = import.meta.server
    ? useRuntimeConfig().thunderSdk
    : useRuntimeConfig().public.thunderSdk;

  return config.apiUrl;
};
