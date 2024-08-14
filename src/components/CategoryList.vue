<template>
  <v-sheet class="mx-auto" elevation="1">
    <v-slide-group v-model="catSlideGroup" class="pa-4" center-active show-arrows>
      <v-slide-group-item
        v-for="cat in categories?.data"
        :key="cat.id"
        v-slot="{ isSelected, toggle }"
      >
        <v-card
          :color="isSelected ? 'amber' : 'grey-lighten-2'"
          class="ma-4"
          height="180"
          width="150"
          @click="selectCategory(cat, toggle, isSelected)"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <div class="image-wrapper">
                <img
                  :src="cat.image"
                  :alt="`category image`"
                  height="150"
                  width="150"
                  loading="lazy"
                />
                <span>{{ cat.name }}</span>
              </div>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
// API
import categoriesApi from "@/api/categoriesApi";

export default {
  name: "CategoryList",
  data() {
    return {
        catSlideGroup: null,
        categories: {
            data: [],
            isLoading: false,
        }
    };
  },
  async mounted() {
    await this.getAllCategories();
  },
  methods: {
    async getAllCategories() {
        try {
            this.categories.isLoading = true;
            const response = await categoriesApi.getAllCategories();
            this.categories.data = response.data;
            this.categories.isLoading = false;

        } catch (error) {
            console.error("CategoryList - getAllCategories - Error fetching data:", error);
            this.categories.isLoading = false;
        }
    },
    selectCategory(data, toggle, isSelected) {
        const categoryDetail = !isSelected ? data : null;
        this.$emit('selectCategory', categoryDetail);

        toggle(); // Call the toggle function from v-slot
    }
  },
};
</script>

<style lang="scss" scoped>
 .image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
 }
</style>