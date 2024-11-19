import type { ProductVariant } from '@thunderstorefront/types';
import type { Ref } from 'vue';

export interface UseVariants {
  variants: Ref<Record<string, ProductVariant>>;
  findVariant: (
    variants: ProductVariant[],
    input: Record<string, string>
  ) => ProductVariant | null;
  setVariant: (productId: string, variant: ProductVariant) => void;
}

export function useVariants(): UseVariants {
  const variants = useState<Record<string, ProductVariant>>(
    'selectedVariants',
    () => ({})
  );

  function findVariant(
    variants: ProductVariant[],
    input: Record<string, string>
  ): ProductVariant | null {
    const selectedOptionIds = Object.values(input);
    const matchedVariant = variants.find((variant) =>
      selectedOptionIds.every((id) =>
        variant.optionValues.some((option) => option.id === id)
      )
    );

    return matchedVariant || null;
  }

  function setVariant(productId: string, variant: ProductVariant): void {
    variants.value[productId] = variant;
  }

  return {
    variants,
    findVariant,
    setVariant
  };
}
