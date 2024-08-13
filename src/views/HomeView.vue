<template>
    <DefaultLayout>
        <!-- Category list -->
        <v-container class="v-col-9">
            <h3 class="text-h6 font-bold">Categories</h3>
            <CategoryList
                @selectCategory="handleCategory"
            />
        </v-container>

        <!-- Product list -->
        <v-container class="v-col-9">
            <h3 class="text-h6 font-bold">Products</h3>
            <v-row v-if="!products.isLoading">
                <v-col v-for="product in products.data" :key="product.id" cols="12" md="2">
                    <product-list :product="product"/>
                </v-col>
            </v-row>
            <v-skeleton-loader type="card" v-else></v-skeleton-loader>
        </v-container>
    </DefaultLayout>         
</template>

<script>
// Components
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import ProductList from "@/views/ProductList.vue";
import CategoryList from "@/components/CategoryList.vue";

// API
import productsApi from "@/api/productsApi.js";

export default {
  name: "HomeView",
  components: {
    DefaultLayout,
    ProductList,
    CategoryList,
  },
  data() {
    return {
      products: {
        data: [],
        isLoading: false,
      },
      categories: {
        data: [],
        isLoading: false,
        selectedId: null,
      },
    };
  },
  async mounted() {
    await this.getAllProducts();
  },
  methods: {
    async getAllProducts(params) {
        try {
            this.products.isLoading = true;
            const response = await productsApi.getAllProducts(params);
            this.products.data = response.data;
            this.products.isLoading = false;

        } catch (error) {
            console.error("HomeView - getAllProducts - Error fetching data:", error);
            this.products.isLoading = false;
        }
    },
    handleCategory (categorySelected) {
        // improvements - store in vuex-persist
        this.categories.selectedId = categorySelected.id;

        this.getAllProducts({
            categoryId: this.categories.selectedId || null,
            // price_min: 10,
            // price_max: 100,
        });
    },
  },
};
</script>
