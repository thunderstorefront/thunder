import type { Category } from '@thunderstorefront/types';

export const categories: Category[] = [
  {
    title: 'Mobile Phones',
    productCount: 300,
    id: 'cat-mobile-phones',
    includeInMenu: true,
    position: 0,
    level: 0,
    image: {
      url: '/electronics/mobile-phones.png',
      label: 'Mobile Phones'
    },
    slug: 'mobile-phones',
    description: 'Explore the latest mobile phones and smartphones.',
    breadcrumbs: [],
    children: [
      {
        title: 'IPhone',
        productCount: 150,
        id: 'cat-mobile-phones-iphone',
        includeInMenu: true,
        position: 0,
        level: 1,
        image: {
          url: '/electronics/iphone.png',
          label: 'IPhone'
        },
        slug: 'mobile-phones/iphone',
        description: 'Discover the latest iPhone models.',
        breadcrumbs: [
          {
            categoryId: 'cat-mobile-phones',
            categoryTitle: 'Mobile Phones',
            categorySlug: 'mobile-phones',
            categoryLevel: 0
          }
        ],
        children: [
          {
            title: 'iPhone 14',
            productCount: 50,
            id: 'cat-mobile-phones-iphone-14',
            includeInMenu: true,
            position: 0,
            level: 2,
            image: {
              url: '/electronics/iphone-14.png',
              label: 'iPhone 14'
            },
            slug: 'mobile-phones/iphone/iphone-14',
            description: 'Latest generation of iPhone 14.',
            breadcrumbs: [
              {
                categoryId: 'cat-mobile-phones',
                categoryTitle: 'Mobile Phones',
                categorySlug: 'mobile-phones',
                categoryLevel: 0
              },
              {
                categoryId: 'cat-mobile-phones-iphone',
                categoryTitle: 'IPhone',
                categorySlug: 'mobile-phones/iphone',
                categoryLevel: 1
              }
            ]
          }
        ]
      },
      {
        title: 'Samsung',
        productCount: 150,
        id: 'cat-mobile-phones-samsung',
        includeInMenu: true,
        position: 1,
        level: 1,
        image: {
          url: '/electronics/samsung.png',
          label: 'Samsung'
        },
        slug: 'mobile-phones/samsung',
        description: 'Explore the latest Samsung Galaxy smartphones.',
        breadcrumbs: [
          {
            categoryId: 'cat-mobile-phones',
            categoryTitle: 'Mobile Phones',
            categorySlug: 'mobile-phones',
            categoryLevel: 0
          }
        ],
        children: [
          {
            title: 'Galaxy S23',
            productCount: 50,
            id: 'cat-mobile-phones-samsung-s23',
            includeInMenu: true,
            position: 0,
            level: 2,
            image: {
              url: '/electronics/samsung-s23.png',
              label: 'Galaxy S23'
            },
            slug: 'mobile-phones/samsung/galaxy-s23',
            description: 'Latest Galaxy S23 smartphone.',
            breadcrumbs: [
              {
                categoryId: 'cat-mobile-phones',
                categoryTitle: 'Mobile Phones',
                categorySlug: 'mobile-phones',
                categoryLevel: 0
              },
              {
                categoryId: 'cat-mobile-phones-samsung',
                categoryTitle: 'Samsung',
                categorySlug: 'mobile-phones/samsung',
                categoryLevel: 1
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Laptops',
    productCount: 200,
    id: 'cat-laptops',
    includeInMenu: true,
    position: 1,
    level: 0,
    image: {
      url: '/images/laptops/laptops.png',
      label: 'Laptops'
    },
    slug: 'laptops',
    description: 'Shop for the best laptops, from gaming to ultrabooks.',
    breadcrumbs: [],
    children: [
      {
        title: 'Gaming Laptops',
        productCount: 100,
        id: 'cat-laptops-gaming',
        includeInMenu: true,
        position: 0,
        level: 1,
        image: {
          url: '/electronics/gaming-laptops.png',
          label: 'Gaming Laptops'
        },
        slug: 'laptops/gaming',
        description: 'Top gaming laptops for gamers.',
        breadcrumbs: [
          {
            categoryId: 'cat-laptops',
            categoryTitle: 'Laptops',
            categorySlug: 'laptops',
            categoryLevel: 0
          }
        ],
        children: [
          {
            title: 'Alienware',
            productCount: 50,
            id: 'cat-laptops-gaming-alienware',
            includeInMenu: true,
            position: 0,
            level: 2,
            image: {
              url: '/electronics/alienware.png',
              label: 'Alienware'
            },
            slug: 'laptops/gaming/alienware',
            description: 'High-performance Alienware gaming laptops.',
            breadcrumbs: [
              {
                categoryId: 'cat-laptops',
                categoryTitle: 'Laptops',
                categorySlug: 'laptops',
                categoryLevel: 0
              },
              {
                categoryId: 'cat-laptops-gaming',
                categoryTitle: 'Gaming Laptops',
                categorySlug: 'laptops/gaming',
                categoryLevel: 1
              }
            ]
          }
        ]
      },
      {
        title: 'Ultrabooks',
        productCount: 100,
        id: 'cat-laptops-ultrabooks',
        includeInMenu: true,
        position: 1,
        level: 1,
        image: {
          url: '/electronics/ultrabooks.png',
          label: 'Ultrabooks'
        },
        slug: 'laptops/ultrabooks',
        description: 'Lightweight ultrabooks for on-the-go professionals.',
        breadcrumbs: [
          {
            categoryId: 'cat-laptops',
            categoryTitle: 'Laptops',
            categorySlug: 'laptops',
            categoryLevel: 0
          }
        ],
        children: [
          {
            title: 'MacBook Air',
            productCount: 50,
            id: 'cat-laptops-ultrabooks-macbook-air',
            includeInMenu: true,
            position: 0,
            level: 2,
            image: {
              url: '/electronics/macbook-air.png',
              label: 'MacBook Air'
            },
            slug: 'laptops/ultrabooks/macbook-air',
            description: 'Lightweight and powerful MacBook Air.',
            breadcrumbs: [
              {
                categoryId: 'cat-laptops',
                categoryTitle: 'Laptops',
                categorySlug: 'laptops',
                categoryLevel: 0
              },
              {
                categoryId: 'cat-laptops-ultrabooks',
                categoryTitle: 'Ultrabooks',
                categorySlug: 'laptops/ultrabooks',
                categoryLevel: 1
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Wearable Devices',
    productCount: 100,
    id: 'cat-wearable-devices',
    includeInMenu: true,
    position: 2,
    level: 0,
    image: {
      url: '/electronics/wearable-devices.png',
      label: 'Wearable Devices'
    },
    slug: 'wearable-devices',
    description:
      'Latest wearable technology, from smartwatches to fitness trackers.',
    breadcrumbs: []
  }
];
