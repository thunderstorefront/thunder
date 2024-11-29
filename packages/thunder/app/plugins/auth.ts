export default defineNuxtPlugin(async (): Promise<void> => {
  const { onLogin } = useAuth();
  const { token } = useAuthToken();

  if (token.value) {
    await onLogin(token.value);
  }
});
