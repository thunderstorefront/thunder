export function extractOptionsFromInput(
  baseProduct: string,
  variantProduct: string
): string[] {
  try {
    // Ensure the input starts with the base product slug
    if (!variantProduct.startsWith(baseProduct)) {
      throw new Error('Input does not match the base product');
    }

    // Remove the base product part from the input string
    const optionsPart = variantProduct.slice(baseProduct.length + 1); // +1 for the hyphen after the base product

    // Split the remaining part by hyphens to get options
    return optionsPart.split('-');
  } catch (error) {
    console.error('Error extracting options:', error);
    return [];
  }
}
