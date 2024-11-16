import type { CartItemInput } from '@thunderstorefront/types';
import type { Ref } from 'vue';

export interface UseAddToCartForm {
  inputs: Ref<Record<string, CartItemInput>>;
  errors: Ref<string[]>;
  setInput: (payload: CartItemInput) => void;
  updateInput: (productId: string, payload: Partial<CartItemInput>) => void;
  removeInput: (productId: string) => void;
  clearInputs: () => void;
  setError: (message: string) => void;
  clearErrors: () => void;
}

export function useAddToCartForm(): UseAddToCartForm {
  const inputs = useState<Record<string, CartItemInput>>(
    'addToCartFormInputs',
    () => ({})
  );
  const errors = useState<string[]>('addToCartFormErrors', () => []);

  function setInput(payload: CartItemInput): void {
    inputs.value[payload.productId] = payload;
  }

  function updateInput(
    productId: string,
    payload: Partial<CartItemInput>
  ): void {
    if (!inputs.value[productId]) return;

    inputs.value[productId] = {
      ...inputs.value[productId],
      ...payload
    };
  }

  function removeInput(productId: string): void {
    if (inputs.value[productId]) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete inputs.value[productId];
    }
  }

  function clearInputs(): void {
    inputs.value = {};
  }

  function setError(message: string): void {
    errors.value.push(message);
  }

  function clearErrors(): void {
    errors.value = [];
  }

  return {
    inputs,
    errors,
    setInput,
    updateInput,
    removeInput,
    clearInputs,
    setError,
    clearErrors
  };
}
