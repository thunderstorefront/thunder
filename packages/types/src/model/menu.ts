import type { Tree } from './common';
import type { Category } from './category';

export type MegaMenuItem = Exclude<Category, 'image' | 'description'>;

export type MegaMenu = Tree<MegaMenuItem>;
