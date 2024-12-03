import type {
  ProductOption,
  ProductOptionValue,
  ProductPage
} from '@thunderstorefront/types';

const options: ProductOption[] = [
  {
    id: '1',
    name: 'Storage Capacity',
    code: '1',
    values: [
      { id: '1-1', label: '64GB', code: '1-1' },
      { id: '1-2', label: '128GB', code: '1-2' },
      { id: '1-3', label: '256GB', code: '1-3' },
      { id: '1-4', label: '512GB', code: '1-4' },
      { id: '1-5', label: '1TB', code: '1-5' }
    ]
  },
  {
    id: '2',
    name: 'Color',
    code: '2',
    values: [
      { id: '2-1', label: 'Black', code: '2-1' },
      { id: '2-2', label: 'Silver', code: '2-2' },
      { id: '2-3', label: 'Gold', code: '2-3' },
      { id: '2-4', label: 'Blue', code: '2-4' },
      { id: '2-5', label: 'Green', code: '2-5' },
      { id: '2-6', label: 'Purple', code: '2-6' }
    ]
  }
];

const metadata: Record<string, unknown> = {
  model: 'iPhone 13',
  display: {
    size: '6.1 inches',
    type: 'Super Retina XDR',
    resolution: '2532 x 1170 pixels'
  },
  processor: {
    name: 'A15 Bionic chip',
    cores: 6,
    neuralEngine: '16-core Neural Engine'
  },
  storageOptions: ['64GB', '128GB', '256GB', '512GB'],
  connectivity: {
    cellular: '5G',
    wifi: 'Wi-Fi 6 (802.11ax)',
    bluetooth: 'Bluetooth 5.0',
    nfc: true
  },
  battery: {
    type: 'Built-in rechargeable lithium-ion',
    videoPlayback: 'Up to 19 hours',
    audioPlayback: 'Up to 75 hours'
  },
  dimensions: {
    height: '146.7 mm',
    width: '71.5 mm',
    depth: '7.65 mm',
    weight: '173 grams'
  },
  waterResistance: 'IP68 (up to 6 meters for 30 minutes)',
  operatingSystem: 'iOS 15',
  faceID: true
};

export const products: ProductPage[] = [
  {
    type: 'ConfigurableProduct',
    title: 'Mocked iPhone 13',
    image: {
      url: '/images/products/smartphone/iphone.jpg',
      label: 'Mocked iPhone 13 Front View'
    },
    thumbnail: {
      url: '/images/products/smartphone/iphone.jpg',
      label: 'Mocked iPhone 13 Thumbnail'
    },
    mediaGallery: [
      {
        url: '/images/products/smartphone/iphone.jpg',
        label: 'Mocked iPhone 13'
      },
      {
        url: '/images/products/smartphone/iphone2.png',
        label: 'Mocked iPhone 13'
      },
      {
        url: '/images/products/smartphone/iphone3.webp',
        label: 'Mocked iPhone 13'
      }
    ],
    slug: 'mocked-iphone-13',
    id: 'MIP13-128GB-BLK',
    shortDescription:
      "Experience the power of the iPhone 13, equipped with Apple's A15 Bionic chip for lightning-fast performance and stunning visuals. Featuring a vibrant Super Retina XDR display and 128GB of storage, this model is perfect for capturing high-quality photos, multitasking, and seamless app usage. With enhanced battery life and 5G capability, stay connected and enjoy your content longer and faster than ever.",
    description:
      'This is a mock product for the iPhone 13, a beautifully designed smartphone packed with cutting-edge technology. It features a 6.1-inch Super Retina XDR display, offering stunning clarity and vibrant colors that bring photos, videos, and games to life. Powered by the A15 Bionic chip, the iPhone 13 delivers lightning-fast performance and efficient power usage, enabling smooth multitasking, gaming, and high-quality photography.\n' +
      '\n' +
      'With 5G capability, the iPhone 13 ensures faster downloads, seamless streaming, and better connectivity, making it easier to stay connected wherever you are. The device is equipped with a dual-camera system that captures sharp photos and videos, even in low light, and offers a range of photography features like Night mode, Photographic Styles, and Cinematic mode for video.\n' +
      '\n' +
      'Additionally, the iPhone 13 includes 128GB of storage, giving you ample space for apps, photos, videos, and more. With enhanced durability through its Ceramic Shield front cover and water resistance, this model is designed to last. Enjoy all-day battery life, Face ID security, and the seamless integration with Apple’s ecosystem for a premium user experience.',
    priceRange: {
      minPrice: {
        currency: 'USD',
        value: 799
      },
      maxPrice: {
        currency: 'USD',
        value: 1099
      }
    },
    variants: [
      {
        id: 'MIP13-128GB-BLK',
        title: '128GB - Black',
        slug: 'mocked-iphone-13-128gb-black',
        thumbnail: {
          url: '/images/products/smartphone/iphone.jpg',
          label: 'Mocked iPhone 13 - 128GB Black Thumbnail'
        },
        priceRange: {
          minPrice: {
            currency: 'USD',
            value: 799
          },
          maxPrice: {
            currency: 'USD',
            value: 899
          }
        },
        inStock: true,
        optionValues: [
          options?.[0]?.values[0] as ProductOptionValue,
          options?.[1]?.values[0] as ProductOptionValue
        ]
      },
      {
        id: 'MIP13-256GB-BLK',
        title: '256GB - Black',
        slug: 'mocked-iphone-13-256gb-black',
        thumbnail: {
          url: '/images/products/smartphone/iphone2.png',
          label: 'Mocked iPhone 13 - 256GB Black Thumbnail'
        },
        priceRange: {
          minPrice: {
            currency: 'USD',
            value: 899
          },
          maxPrice: {
            currency: 'USD',
            value: 999
          }
        },
        inStock: true,
        optionValues: [
          options?.[0]?.values[1] as ProductOptionValue,
          options?.[1]?.values[1] as ProductOptionValue
        ]
      },
      {
        id: 'MIP13-512GB-BLK',
        title: '512GB - Black',
        slug: 'mocked-iphone-13-512gb-black',
        thumbnail: {
          url: '/images/products/smartphone/iphone3.webp',
          label: 'Mocked iPhone 13 - 512GB Black Thumbnail'
        },
        priceRange: {
          minPrice: {
            currency: 'USD',
            value: 999
          },
          maxPrice: {
            currency: 'USD',
            value: 1099
          }
        },
        inStock: false,
        optionValues: [
          options?.[0]?.values[2] as ProductOptionValue,
          options?.[1]?.values[2] as ProductOptionValue
        ]
      }
    ],
    options,
    ratingSummary: 75,
    reviewCount: 25,
    inStock: true,
    metadata,
    categories: []
  },
  {
    type: 'SimpleProduct',
    title: 'Mocked Sony WH-1000XM4',
    image: {
      url: '/images/products/headphones/sony.webp',
      label: 'Mocked Sony WH-1000XM4 Front View'
    },
    thumbnail: {
      url: '/images/products/headphones/sony.webp',
      label: 'Mocked Sony WH-1000XM4 Thumbnail'
    },
    mediaGallery: [
      {
        url: '/images/products/headphones/sony.webp',
        label: 'Mocked Sony WH-1000XM4 Front View'
      }
    ],
    slug: 'mocked-sony-wh-1000xm4',
    id: 'MSWH1000XM4-BLK',
    shortDescription:
      'Mocked noise-canceling headphones with up to 30 hours of battery life.',
    description:
      'The mocked Sony WH-1000XM4 offers superior noise cancellation, crystal-clear audio, and a long-lasting battery life.',
    priceRange: {
      minPrice: {
        currency: 'USD',
        value: 399
      },
      maxPrice: {
        currency: 'USD',
        value: 399
      }
    },
    variants: [],
    options: [],
    ratingSummary: 67,
    reviewCount: 9,
    inStock: true,
    metadata: {},
    categories: []
  },
  {
    type: 'SimpleProduct',
    title: 'Mocked Samsung Galaxy S21',
    image: {
      url: '/images/products/smartphone/galaxy_s21.webp',
      label: 'Mocked Samsung Galaxy S21 Front View'
    },
    thumbnail: {
      url: '/images/products/smartphone/galaxy_s21.webp',
      label: 'Mocked Samsung Galaxy S21 Thumbnail'
    },
    mediaGallery: [
      {
        url: '/images/products/smartphone/galaxy_s21.webp',
        label: 'Mocked Samsung Galaxy S21 Front View'
      }
    ],
    slug: 'mocked-samsung-galaxy-s21',
    id: 'MSG21-128GB-GRY',
    shortDescription:
      'Mocked Samsung Galaxy S21 with Exynos 2100 and 128GB storage.',
    description:
      'This is a mock product for the Samsung Galaxy S21, featuring a 6.2-inch Dynamic AMOLED display, Exynos 2100 chip, and 5G capability.',
    priceRange: {
      minPrice: {
        currency: 'USD',
        value: 699
      },
      maxPrice: {
        currency: 'USD',
        value: 849
      }
    },
    variants: [],
    options: [],
    ratingSummary: 99,
    reviewCount: 19,
    inStock: true,
    metadata: {},
    categories: []
  },
  {
    type: 'SimpleProduct',
    title: 'Mocked Bose QuietComfort 35 II',
    image: {
      url: '/images/products/headphones/bose_qc35.png',
      label: 'Mocked Bose QuietComfort 35 II Front View'
    },
    thumbnail: {
      url: '/images/products/headphones/bose_qc35.png',
      label: 'Mocked Bose QuietComfort 35 II Thumbnail'
    },
    mediaGallery: [
      {
        url: '/images/products/headphones/bose_qc35.png',
        label: 'Mocked Bose QuietComfort 35 II Front View'
      }
    ],
    slug: 'mocked-bose-qc35-ii',
    id: 'MBQC35II-SLV',
    shortDescription:
      'Mocked Bose QuietComfort 35 II noise-canceling headphones.',
    description:
      'The mocked Bose QC35 II offers world-class noise cancellation, excellent comfort, and clear audio quality.',
    priceRange: {
      minPrice: {
        currency: 'USD',
        value: 349
      },
      maxPrice: {
        currency: 'USD',
        value: 349
      }
    },
    variants: [],
    options: [],
    ratingSummary: 80,
    reviewCount: 21,
    inStock: true,
    metadata: {},
    categories: []
  },
  {
    type: 'SimpleProduct',
    title: 'Mocked MacBook Pro 14"',
    image: {
      url: '/images/products/laptop/macbook.webp',
      label: 'Mocked MacBook Pro 14" Front View'
    },
    thumbnail: {
      url: '/images/products/laptop/macbook.webp',
      label: 'Mocked MacBook Pro 14" Thumbnail'
    },
    mediaGallery: [
      {
        url: '/images/products/laptop/macbook.webp',
        label: 'Mocked MacBook Pro 14" Front View'
      }
    ],
    slug: 'mocked-macbook-pro-14',
    id: 'MMP14-512GB-GRY',
    shortDescription:
      'Mocked MacBook Pro 14" with M1 Pro chip and 512GB storage.',
    description:
      'This is a mock product for the MacBook Pro 14", featuring the M1 Pro chip, a 14-inch Liquid Retina XDR display, and 16GB of RAM.',
    priceRange: {
      minPrice: {
        currency: 'USD',
        value: 1999
      },
      maxPrice: {
        currency: 'USD',
        value: 1999
      }
    },
    variants: [],
    options: [],
    ratingSummary: 50,
    reviewCount: 12,
    inStock: true,
    metadata: {},
    categories: []
  },
  {
    type: 'SimpleProduct',
    title: 'Mocked Dell XPS 13"',
    image: {
      url: '/images/products/laptop/dell-xps.webp',
      label: 'Mocked Dell XPS 13" Front View'
    },
    thumbnail: {
      url: '/images/products/laptop/dell-xps.webp',
      label: 'Mocked Dell XPS 13" Thumbnail'
    },
    mediaGallery: [
      {
        url: '/images/products/laptop/dell-xps.webp',
        label: 'Mocked Dell XPS 13" Front View'
      }
    ],
    slug: 'mocked-dell-xps-13',
    id: 'DXPS13-1TB-SIL',
    shortDescription:
      'Mocked Dell XPS 13" with Intel i7 processor and 1TB SSD.',
    description:
      'This is a mock product for the Dell XPS 13", featuring an Intel Core i7 processor, a 13.4-inch InfinityEdge display, and 16GB of RAM.',
    priceRange: {
      minPrice: {
        currency: 'USD',
        value: 1499
      },
      maxPrice: {
        currency: 'USD',
        value: 1499
      }
    },
    variants: [],
    options: [],
    ratingSummary: 0,
    reviewCount: 0,
    inStock: true,
    metadata: {},
    categories: []
  }
];
