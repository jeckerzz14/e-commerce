<template>
    <v-app>
        <v-main>
            <v-container>
                <span class="font-light-italic">HOMEPAGE</span>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import productsApi from "@/api/productsApi.js";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getAllProducts();
  },
  methods: {
    async getAllProducts() {
      try {
        const response = await productsApi.getAllProducts();
        this.products = response.data;
      } catch (error) {
        console.error("HomeView - getAllProducts - Error fetching data:", error);
      }
    },
  },
};
</script>
