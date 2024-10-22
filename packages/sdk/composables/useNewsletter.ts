export interface UseNewsletter {
  subscribeGuestToNewsletter: (email: string) => Promise<string>;
}

export function useNewsletter(): UseNewsletter {
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
