import { useClient } from '../utils';

export interface UseNewsletterApi {
  subscribeGuestToNewsletter: (email: string) => Promise<string>;
}

export function useNewsletterApi(): UseNewsletterApi {
  const client = useClient();

  async function subscribeGuestToNewsletter(email: string): Promise<string> {
    return await client(`/api/newsletter/guest-subscribe`, {
      method: 'POST',
      body: {
        email
      }
    });
  }

  return {
    subscribeGuestToNewsletter
  };
}
