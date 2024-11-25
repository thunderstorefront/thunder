export default defineNuxtPlugin(async (): Promise<void> => {
  const { token, onLogin } = useAuth();

  if (token.value) {
    await onLogin(token.value);
  }
});
