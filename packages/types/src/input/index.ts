export type PageDataInput = {
  pageSize?: number;
  currentPage?: number;
};

export type LoginUserInput = {
  email: string;
  password: string;
};

export type CartAddressInput = {
  city: string;
  company?: string;
  countryCode: string;
  firstname: string;
  lastname: string;
  postcode?: string;
  region?: string;
  regionId?: number;
  saveInAddressBook?: boolean;
  street: (string | undefined)[];
  telephone?: string;
  vatId?: string;
};

export type SetBillingAddressInput = {
  cartId: string;
  useForShipping: boolean;
  address: CartAddressInput;
};

export type UpdateUserInput = {
  firstName: string;
  lastName: string;
};

export type RegisterAccountInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type FilterInput = {
  eq?: string;
  in?: Array<string>;
  from?: string;
  to?: string;
};

export type SortInput = {
  name?: string;
  position?: string;
  price?: string;
  relevance?: string;
};

export type FiltersInput = Record<string, FilterInput>;

export type ProductListInput = PageDataInput & {
  filters?: FiltersInput;
  sort?: SortInput;
  search?: string;
};

export type AddReviewInput = {
  nickname: string;
  summary: string;
  text: string;
  ratings: { ratingId: string; ratingValueId: string }[];
};

export type CartItemInput = {
  quantity: number;
  productId: string;
};

export type CustomerAddressInput = {
  city?: string;
  company?: string;
  countryCode?: string;
  customAttributes?: Record<string, string>;
  defaultBilling?: boolean;
  defaultShipping?: boolean;
  fax?: string;
  firstname?: string;
  lastname?: string;
  postcode?: string;
  prefix?: string;
  regionId?: number;
  street?: Array<string | undefined>;
  suffix?: string;
  telephone?: string;
  vatId?: string;
};

export type CustomerAddressListInput = PageDataInput;

export type UpdateCustomerAddressInput = {
  id: number;
  address: CustomerAddressInput;
};

export type WishlistListInput = PageDataInput;

export type ReviewsListInput = PageDataInput;

export type OrderListInput = PageDataInput;
