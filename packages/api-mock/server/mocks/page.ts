import { faker } from '@faker-js/faker';
import type { Page } from '@thunderstorefront/types';

// Mock for Page
export const mockPage = (): Page => ({
  id: faker.string.uuid(),
  slug: faker.lorem.slug(),
  content: faker.lorem.paragraphs(),
  contentHeading: faker.lorem.sentence(),
  title: faker.lorem.sentence(),
  pageLayout: faker.lorem.word(),
  metaTitle: faker.lorem.words(),
  metaKeywords: faker.lorem.words(),
  metaDescription: faker.lorem.paragraph()
});
