<template>
    <DefaultLayout>
        <!-- Search -->
        <v-container class="v-col-9">
            <v-text-field
                v-model="searchParams.searchInput"
                color="orange-lighten-1"
                append-icon="mdi-magnify"
                placeholder="Search product"
                @keydown="searchProduct($event)"
            >
            </v-text-field>
        </v-container>

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
            <template v-if="!products.isLoading">
                <v-row v-if="products?.data.length > 0">
                    <v-col v-for="product in products.data" :key="product.id" cols="12" md="2">
                        <ProductCard :product="product"/>
                    </v-col>
                </v-row>
                <div class="py-2" v-else>
                    <span class="font-thin">We couldn’t find any products matching your search.</span>
                </div>
            </template>
            <v-skeleton-loader type="card" v-else></v-skeleton-loader>
        </v-container>
    </DefaultLayout>         
</template>

<script>
// Components
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import ProductCard from "@/components/products/ProductCard.vue";
import CategoryList from "@/components/products/CategoryList.vue";

// API
import productsApi from "@/api/productsApi.js";

export default {
  name: "HomeView",
  components: {
    DefaultLayout,
    ProductCard,
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
      },
      searchParams: {
        categoryId: null,
        searchInput: null,
      },
    };
  },
  watch: {
    searchParams: {
        handler(newVal, oldVal) {
            // Filter
            this.getAllProducts({
                categoryId: newVal.categoryId || null,
                title: newVal.searchInput || null,
            });
        },
        deep: true,
    }
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
        this.searchParams.categoryId = categorySelected?.id;
    },
    searchProduct($event) {
        setTimeout(() => {
            this.searchParams.searchInput = $event?.target.value;
        }, 200)
    },
  },
};
</script>
