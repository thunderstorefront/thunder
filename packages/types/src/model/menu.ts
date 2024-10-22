import { Tree } from './common';
import { Category } from './category';

export type MegaMenuItem = Exclude<Category, 'image' | 'description'>;

export type MegaMenu = Tree<MegaMenuItem>;
