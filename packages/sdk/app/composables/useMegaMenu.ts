import type { MegaMenu, MegaMenuItem } from '@thunderstorefront/types';

interface UseMegaMenu {
  megaMenu: Ref<MegaMenu | null>;
  menuItems: Ref<MegaMenuItem[]>;
  showMegaMenu: Ref<boolean>;
  fetchMegaMenu: (rootCategoryId: string) => Promise<MegaMenu>;
  updateMegaMenu: (rootCategoryId: string) => Promise<MegaMenu>;
}

export function useMegaMenu(): UseMegaMenu {
  const megaMenu = useState<MegaMenu | null>('megaMenu', () => null);
  const showMegaMenu = useState<boolean>('showMegaMenu', () => false);
  const client = useClient();

  const menuItems = computed(() => megaMenu.value?.children ?? []);

  async function fetchMegaMenu(rootCategoryId: string): Promise<MegaMenu> {
    return await client(`/api/category/${rootCategoryId}`);
  }

  async function updateMegaMenu(rootCategoryId: string): Promise<MegaMenu> {
    megaMenu.value = await fetchMegaMenu(rootCategoryId);
    return megaMenu.value;
  }

  return {
    megaMenu,
    menuItems,
    showMegaMenu,
    fetchMegaMenu,
    updateMegaMenu
  };
}
