export type FilterOption = {
  label: string;
  value: string;
  count: number;
};

export type Filter = {
  label: string;
  attributeCode: string;
  count: number;
  options: FilterOption[];
};
