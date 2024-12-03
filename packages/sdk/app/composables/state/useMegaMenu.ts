import type { Category } from '@thunderstorefront/types';
import type { Ref } from 'vue';

interface UseMegaMenu {
  menuItems: Ref<Category[]>;
  showMegaMenu: Ref<boolean>;
  updateMegaMenu: () => Promise<Category[]>;
}

export function useMegaMenu(): UseMegaMenu {
  const client = useClient();
  const menuItems = useState<Category[]>('menuItems', () => []);
  const showMegaMenu = useState<boolean>('showMegaMenu', () => false);

  async function updateMegaMenu(): Promise<Category[]> {
    menuItems.value = await client<Category[]>(`/api/categories`);
    return menuItems.value;
  }

  return {
    menuItems,
    showMegaMenu,
    updateMegaMenu
  };
}
