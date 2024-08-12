<template>
  <div class="home">
    <div>Homepage</div>
  </div>
</template>

<script>
import productsApi from '@/api/productsApi.js';

export default {
  name: 'HomeView',
  components: {
  },
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
        console.error('HomeView - getAllProducts - Error fetching data:', error);
      }
    },
  },
}
</script>
