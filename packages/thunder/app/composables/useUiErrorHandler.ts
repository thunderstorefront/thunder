import { Notifications } from './useUiNotification';

export interface UseUiErrorHandler {
  showError: (error: unknown) => void;
}

export interface UseUiErrorHandlerOptions {
  transformError?: (error: unknown) => string;
}

export function useUiErrorHandler(
  options?: UseUiErrorHandlerOptions
): UseUiErrorHandler {
  const { t } = useI18n();
  const { showNotification } = useUiNotification();

  function defaultTransformError(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    }
    return t('messages.ui.errorDefault');
  }

  const transformError = options?.transformError || defaultTransformError;

  function showError(error: unknown): void {
    const errorMessage = transformError(error);

    showNotification(errorMessage, Notifications.error);
  }

  return {
    showError
  };
}
