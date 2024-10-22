import type { MegaMenu, MegaMenuItem } from '@thunderstorefront/types';

interface UseMegaMenu {
  megaMenu: Ref<MegaMenu | null>;
  menuItems: Ref<MegaMenuItem[]>;
  showMegaMenu: Ref<boolean>;
  fetchMegaMenu: (categoryId: string) => Promise<MegaMenu>;
}

export function useMegaMenu(): UseMegaMenu {
  const megaMenu = useState<MegaMenu | null>('megaMenu', () => null);
  const showMegaMenu = useState<boolean>('showMegaMenu', () => false);
  const client = useClient();

  const menuItems = computed(() => megaMenu.value?.children ?? []);

  async function fetchMegaMenu(categoryId: string): Promise<MegaMenu> {
    return await client(`/api/category/${categoryId}`);
  }

  return {
    megaMenu,
    menuItems,
    showMegaMenu,
    fetchMegaMenu
  };
}
