export interface ThunderSdkConfig {
  apiUrl?: string;
  cartToken: string;
  authToken: string;
  storeToken: string;
}

const config: ThunderSdkConfig = {
  apiUrl: undefined,
  cartToken: 'cart_token',
  authToken: 'auth_token',
  storeToken: 'store_token'
};

export default config;
