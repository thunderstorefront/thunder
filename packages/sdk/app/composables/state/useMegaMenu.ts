import type { MegaMenu, MegaMenuItem } from '@thunderstorefront/types';
import { computed, type Ref } from 'vue';

interface UseMegaMenu {
  megaMenu: Ref<MegaMenu | null>;
  menuItems: Ref<MegaMenuItem[]>;
  showMegaMenu: Ref<boolean>;
  updateMegaMenu: (rootCategoryId: string) => Promise<MegaMenu>;
}

export function useMegaMenu(): UseMegaMenu {
  const megaMenu = useState<MegaMenu | null>('megaMenu', () => null);
  const showMegaMenu = useState<boolean>('showMegaMenu', () => false);
  const { fetchCategory } = useCategoryApi();

  const menuItems = computed(() => megaMenu.value?.children ?? []);

  async function updateMegaMenu(rootCategoryId: string): Promise<MegaMenu> {
    megaMenu.value = await fetchCategory(rootCategoryId);
    return megaMenu.value;
  }

  return {
    megaMenu,
    menuItems,
    showMegaMenu,
    updateMegaMenu
  };
}
