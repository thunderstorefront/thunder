export type Region = {
  code: string;
  id: number;
  name: string;
};

export type Country = {
  fullNameLocale: string;
  twoLetterAbbreviation: string;
  threeLetterAbbreviation: string;
  availableRegions: Region[];
};
