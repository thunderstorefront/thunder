import type { Filter } from '@thunderstorefront/types';

export const filters: Filter[] = [
  {
    label: 'Price',
    attributeCode: 'price',
    count: 5,
    options: [
      {
        label: '0-400',
        value: '0_400',
        count: 2
      },
      {
        label: '400-800',
        value: '400_800',
        count: 2
      },
      {
        label: '800-1100',
        value: '800_1100',
        count: 1
      }
    ]
  },
  {
    label: 'Storage Capacity',
    attributeCode: 'storage-capacity',
    count: 5,
    options: [
      {
        label: '64 GB',
        value: '64gb',
        count: 2
      },
      {
        label: '128 GB',
        value: '128gb',
        count: 2
      },
      {
        label: '256 GB',
        value: '256gb',
        count: 1
      }
    ]
  },
  {
    label: 'Battery Life',
    attributeCode: 'battery-life',
    count: 2,
    options: [
      {
        label: 'Up to 10 hours',
        value: 'up-to-10h',
        count: 1
      },
      {
        label: '10-20 hours',
        value: '10-20h',
        count: 1
      }
    ]
  },
  {
    label: 'Brand',
    attributeCode: 'brand',
    count: 4,
    options: [
      {
        label: 'Apple',
        value: 'apple',
        count: 1
      },
      {
        label: 'Samsung',
        value: 'samsung',
        count: 1
      },
      {
        label: 'Sony',
        value: 'sony',
        count: 1
      },
      {
        label: 'Dell',
        value: 'dell',
        count: 1
      }
    ]
  },
  {
    label: 'Screen Size',
    attributeCode: 'screen-size',
    count: 3,
    options: [
      {
        label: '13 inch',
        value: '13-inch',
        count: 1
      },
      {
        label: '15 inch',
        value: '15-inch',
        count: 1
      },
      {
        label: '17 inch',
        value: '17-inch',
        count: 1
      }
    ]
  },
  {
    label: 'Operating System',
    attributeCode: 'operating-system',
    count: 3,
    options: [
      {
        label: 'Windows',
        value: 'windows',
        count: 1
      },
      {
        label: 'MacOS',
        value: 'macos',
        count: 1
      },
      {
        label: 'Linux',
        value: 'linux',
        count: 1
      }
    ]
  },
  {
    label: 'Color',
    attributeCode: 'color',
    count: 12,
    options: [
      {
        label: 'green',
        value: 'green',
        count: 7
      },
      {
        label: 'black',
        value: 'black',
        count: 4
      },
      {
        label: 'red',
        value: 'red',
        count: 1
      }
    ]
  },
  {
    label: 'Connectivity',
    attributeCode: 'connectivity',
    count: 4,
    options: [
      {
        label: 'WiFi',
        value: 'wifi',
        count: 2
      },
      {
        label: 'Bluetooth',
        value: 'bluetooth',
        count: 1
      },
      {
        label: '5G',
        value: '5g',
        count: 1
      }
    ]
  }
];
