export default defineNuxtPlugin((): void => {
  const { token, onLogin } = useAuth();

  if (token.value) {
    onLogin(token.value);
  }
});
