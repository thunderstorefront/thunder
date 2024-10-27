interface UseSearch {
  searchQuery: Ref<string>;
  isSearchQuery: ComputedRef<boolean>;
  setSearch: (search: string) => Promise<void>;
  getSearch: () => string;
  resetSearch: () => Promise<void>;
}

export function useSearch(): UseSearch {
  const searchQuery = useState<string>('searchQuery', () => '');
  const route = useRoute();
  const router = useRouter();

  async function setSearch(search: string): Promise<void> {
    searchQuery.value = search;
    await router.push({ query: { ...route.query, query: search } });
  }

  function getSearch(): string {
    return route.query.query?.toString() || '';
  }

  async function resetSearch(): Promise<void> {
    await setSearch('');
  }

  const isSearchQuery = computed(() => !!searchQuery.value);

  searchQuery.value = getSearch();

  return {
    searchQuery,
    isSearchQuery,
    setSearch,
    getSearch,
    resetSearch
  };
}
