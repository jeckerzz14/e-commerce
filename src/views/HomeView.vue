<template>
    <v-app>
        <v-main>
            <!-- TODO make layouts to header and footer like in nuxt -->
            <!-- HEADER -->
            <v-app-bar :elevation="2">
                <v-app-bar-title>Ecommerce</v-app-bar-title>

                <div class="card-wrapper">Cart-icon</div>
                <div class="login-wrapper">Login</div>
            </v-app-bar>
            
            <!-- Category list -->
            
            <!-- Product list -->
            <v-container class="v-col-9">
                <h2>Products</h2>
                <v-row v-if="!products.isLoading">
                    <v-col v-for="product in products.data" :key="product.id" cols="12" md="2">
                        <product-list :product="product"/>
                    </v-col>
                </v-row>
                <v-skeleton-loader type="card" v-else></v-skeleton-loader>
            </v-container>


            <!-- FOOTER -->
            <v-bottom-navigation></v-bottom-navigation>
        </v-main>
    </v-app>
</template>

<script>
// Components
import ProductList from "@/views/ProductList.vue";

// API
import productsApi from "@/api/productsApi.js";


export default {
  name: "HomeView",
  components: {
    ProductList
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
    };
  },
  async mounted() {
    await this.getAllProducts();
  },
  methods: {
    // TODO include in mixins
    async getAllProducts() {
      try {
        this.products.isLoading = true;
        const response = await productsApi.getAllProducts();
        this.products.data = response.data;
        this.products.isLoading = false;

      } catch (error) {
        console.error("HomeView - getAllProducts - Error fetching data:", error);
        this.products.isLoading = false;
      }
    },
  },
};
</script>
