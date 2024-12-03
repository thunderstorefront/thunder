import type { ProductOption, ProductVariant } from '@thunderstorefront/types';
import type { Ref } from 'vue';

export interface UseVariants {
  variants: Ref<Record<string, ProductVariant>>;
  findVariant: (
    variants: ProductVariant[],
    input: Record<string, string>
  ) => ProductVariant | null;
  setVariant: (productId: string, variant: ProductVariant) => void;
  findSelectedOptions: (
    productOptions: ProductOption[],
    selectedVariant: ProductVariant
  ) => Record<string, string>;
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

  function findSelectedOptions(
    productOptions: ProductOption[],
    selectedVariant: ProductVariant
  ): Record<string, string> {
    return productOptions.reduce(
      (result, option) => {
        const selectedValue = option.values.find((value) =>
          selectedVariant.optionValues.some(
            (variantValue) => variantValue.id === value.id
          )
        );

        if (selectedValue) {
          result[option.id] = selectedValue.id; // Map option.id to optionValue.id
        }

        return result;
      },
      {} as Record<string, string>
    );
  }

  return {
    variants,
    findVariant,
    findSelectedOptions,
    setVariant
  };
}
