export const products = [
  {
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
      'Mocked iPhone 13 with A15 Bionic chip and 128GB storage.',
    description:
      'This is a mock product for the iPhone 13, featuring a 6.1-inch Super Retina XDR display, A15 Bionic chip, and 5G capability.',
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
        inStock: true
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
        inStock: true
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
        inStock: false
      }
    ],
    ratingSummary: 75,
    reviewCount: 25,
    inStock: true
  },
  {
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
    ratingSummary: 67,
    reviewCount: 9,
    inStock: true
  },
  {
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
    ratingSummary: 99,
    reviewCount: 19,
    inStock: true
  },
  {
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
    ratingSummary: 80,
    reviewCount: 21,
    inStock: true
  },
  {
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
        value: 2499
      }
    },
    ratingSummary: 50,
    reviewCount: 12,
    inStock: true
  }
];
