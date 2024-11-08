import type { Category } from '@thunderstorefront/types';

export const categories: Category[] = [
  {
    title: 'Electronics',
    productCount: 1200,
    id: 'cat-electronics',
    includeInMenu: true,
    position: 0,
    level: 0,
    image: {
      url: '/electronics/electronics.png',
      label: 'Electronics'
    },
    slug: 'electronics',
    description:
      'Discover a wide range of electronics, from mobile phones to laptops.',
    breadcrumbs: [],
    children: [
      {
        title: 'Mobile Phones',
        productCount: 300,
        id: 'cat-mobile-phones',
        includeInMenu: true,
        position: 1,
        level: 2,
        image: {
          url: '/electronics/mobile-phones.png',
          label: 'Mobile Phones'
        },
        slug: 'electronics/mobile-phones',
        description: 'Explore the latest mobile phones and smartphones.',
        breadcrumbs: [
          {
            categoryId: 'cat-electronics',
            categoryTitle: 'Electronics',
            categorySlug: 'electronics',
            categoryLevel: 1
          }
        ],
        children: [
          {
            title: 'IPhone',
            productCount: 300,
            id: 'cat-mobile-phones-iphone',
            includeInMenu: true,
            position: 1,
            level: 3,
            image: {
              url: '/electronics/iphone.png',
              label: 'IPhone'
            },
            slug: 'electronics/mobile-phones/iphone',
            description: 'Explore the latest mobile phones and smartphones.',
            breadcrumbs: [
              {
                categoryId: 'cat-electronics',
                categoryTitle: 'Electronics',
                categorySlug: 'electronics',
                categoryLevel: 1
              },
              {
                categoryId: 'cat-mobile-phones',
                categoryTitle: 'Mobile Phones',
                categorySlug: 'electronics/mobile-phones',
                categoryLevel: 2
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
        position: 2,
        level: 2,
        image: {
          url: '/images/laptops/laptops.png',
          label: 'Laptops'
        },
        slug: 'electronics/laptops',
        description: 'Shop for the best laptops, from gaming to ultrabooks.',
        breadcrumbs: [
          {
            categoryId: 'cat-electronics',
            categoryTitle: 'Electronics',
            categorySlug: 'electronics',
            categoryLevel: 1
          }
        ]
      },
      {
        title: 'Cameras',
        productCount: 150,
        id: 'cat-cameras',
        includeInMenu: true,
        position: 3,
        level: 2,
        image: {
          url: '/electronics/cameras.png',
          label: 'Cameras'
        },
        slug: 'electronics/cameras',
        description: 'Find top-rated cameras for photography enthusiasts.',
        breadcrumbs: [
          {
            categoryId: 'cat-electronics',
            categoryTitle: 'Electronics',
            categorySlug: 'electronics',
            categoryLevel: 1
          }
        ]
      },
      {
        title: 'Wearable Devices',
        productCount: 100,
        id: 'cat-wearable-devices',
        includeInMenu: true,
        position: 4,
        level: 2,
        image: {
          url: '/electronics/wearable-devices.png',
          label: 'Wearable Devices'
        },
        slug: 'electronics/wearable-devices',
        description:
          'Latest wearable technology, from smartwatches to fitness trackers.',
        breadcrumbs: [
          {
            categoryId: 'cat-electronics',
            categoryTitle: 'Electronics',
            categorySlug: 'electronics',
            categoryLevel: 1
          }
        ]
      }
    ]
  }
];
