<script lang="ts" setup>
const localizePath = useLocalePath();

const { showMegaMenu, menuItems } = useMegaMenu();

const activeSubmenus = ref<string[]>([]);

function toggleSubmenu(id: string) {
  if (id) {
    if (activeSubmenus.value.includes(id)) {
      activeSubmenus.value = activeSubmenus.value.filter(
        (submenuId) => submenuId !== id
      );
    } else {
      activeSubmenus.value.push(id);
    }
  }
}

function isSubmenuOpen(id: string) {
  if (id) {
    return activeSubmenus.value.includes(id);
  }
  return false;
}

function handleLink(slug = '', containsProducts = false) {
  if (slug && containsProducts) {
    showMegaMenu.value = false;

    navigateTo({
      path: localizePath(getCategoryPath(slug))
    });
  }
}
</script>

<template>
  <USlideover v-model="showMegaMenu" :side="'left'">
    <div class="h-full overflow-auto p-8">
      <div class="mb-4 flex justify-between">
        <BaseTypography variant="subtitle" class="font-semibold">
          {{ $t('messages.shop.catalog') }}
        </BaseTypography>
        <Icon
          name="ri:close-fill"
          class="text-2xl hover:cursor-pointer"
          @click="showMegaMenu = false"
        />
      </div>
      <nav>
        <ul>
          <li
            v-for="category in menuItems"
            :key="category.id"
            class="border-b py-4"
          >
            <div
              class="flex w-full items-center justify-between"
              @click="toggleSubmenu(category.id)"
            >
              <a
                class="hover:cursor-pointer"
                @click.stop="handleLink(category.slug, !!category.productCount)"
              >
                {{ category.title }}
              </a>
              <Icon
                v-if="category.children?.length"
                :name="
                  isSubmenuOpen(category.id)
                    ? 'solar:alt-arrow-up-linear'
                    : 'solar:alt-arrow-down-linear'
                "
              />
            </div>

            <ul
              v-if="isSubmenuOpen(category.id) && category.children"
              class="pl-4"
            >
              <li
                v-for="subcategory in category?.children"
                :key="subcategory.id"
                class="border-b py-4 last:border-none last:pb-0"
              >
                <div
                  class="flex w-full justify-between hover:cursor-pointer"
                  @click="toggleSubmenu(subcategory.id)"
                >
                  <BaseTypography
                    variant="caption"
                    class="font-semibold"
                    @click.stop="
                      handleLink(subcategory.slug, !!subcategory.productCount)
                    "
                  >
                    {{ subcategory.title }}
                  </BaseTypography>
                  <Icon
                    v-if="subcategory.children?.length"
                    :name="
                      isSubmenuOpen(subcategory.id)
                        ? 'solar:alt-arrow-up-linear'
                        : 'solar:alt-arrow-down-linear'
                    "
                  />
                </div>

                <ul
                  v-if="isSubmenuOpen(subcategory.id) && subcategory.children"
                  class="mt-2 pl-4"
                >
                  <li
                    v-for="subSubcategory in subcategory?.children"
                    :key="subSubcategory.id"
                    class="py-2"
                  >
                    <a
                      class="hover:cursor-pointer"
                      @click.stop="
                        handleLink(
                          subSubcategory.slug,
                          !!subSubcategory.productCount
                        )
                      "
                      >{{ subSubcategory.title }}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </USlideover>
</template>
