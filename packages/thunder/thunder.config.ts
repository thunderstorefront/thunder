export interface ThunderThemeConfig {
  logo: string;
  logoMin: string;
  reloadedToken: string;
  fallbackImage: string;
}

const config: ThunderThemeConfig = {
  logo: '/images/logo.svg',
  logoMin: '/images/logo_min.svg',
  reloadedToken: 'is_reloaded',
  fallbackImage: '/images/placeholder.jpg'
};

export default config;
