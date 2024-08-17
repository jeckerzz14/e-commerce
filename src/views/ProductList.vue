<template>
<section @click="viewProduct(product)">
    <v-card
        class="mx-auto cursor-pointer"
        max-width="200"
    >
        <v-img
            :src="product?.images[0]"
            :alt="`product image ${product?.category.name}`"
            class="zoom-on-hover"
            height="200"
            cover
            loading="lazy"
        >
        </v-img>

        <v-card-title class="font-bold"> {{ product?.title }} </v-card-title>

        <v-card-subtitle> {{ product?.category.name }} </v-card-subtitle>
        <v-card-subtitle class="price"> {{ product?.price }} </v-card-subtitle>
    </v-card>
</section>
</template>

<script>
export default {
  name: "ProductList",
  props: {
    product: {
        type: Object,
        required: true,
    },
  },
  methods: {
    viewProduct(data) {
        this.$router.push(`/product/${data.id}`);
    }
  }
};
</script>