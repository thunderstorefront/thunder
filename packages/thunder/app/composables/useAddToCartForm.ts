import type { CartItemInput } from '@thunderstorefront/types';

export interface UseAddToCartForm {
  input: Ref<CartItemInput[]>;
  errors: Ref<string[]>;
  setInput: (payload: CartItemInput) => void;
  updateInput: (payload: CartItemInput) => void;
  setError: (message: string) => void;
  clearErrors: () => void;
}

export function useAddToCartForm(): UseAddToCartForm {
  const input = useState<CartItemInput[]>('addToCartFormInput', () => []);
  const errors = useState<string[]>('addToCartFormErrors', () => []);

  function setInput(payload: CartItemInput): void {
    const inputItemIndex = input.value.findIndex(
      (item: CartItemInput) => item.productId === payload.productId
    );
    if (inputItemIndex !== -1) {
      input.value[inputItemIndex] = payload;
      return;
    }
    input.value.push(payload);
  }

  function updateInput(payload: CartItemInput): void {
    const inputItemIndex = input.value.findIndex(
      (item: CartItemInput) => item.productId === payload.productId
    );
    const inputItem = input.value[inputItemIndex];

    if (!inputItem) return;

    input.value[inputItemIndex] = {
      ...input.value[inputItemIndex],
      ...payload
    };
  }

  function clearErrors(): void {
    errors.value = [];
  }

  function setError(message: string): void {
    errors.value.push(message);
  }

  return {
    input,
    errors,
    setInput,
    updateInput,
    setError,
    clearErrors
  };
}
