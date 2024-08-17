<template>
    <v-card
        class="mx-auto cursor-pointer"
        max-width="200"
        @click="viewProduct(product)"
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

        <v-card-actions>
            <v-btn
                :text="CONTENT.buttonText.addToCart"
                variant="tonal"
                color="deep-orange-darken-1"
                size="x-small"
                @click="addToCart($event, product)"
            >
            </v-btn>
        </v-card-actions>
    </v-card>
    <ToastNotification 
        v-model="showToastNotif"
        :message="CONTENT.cart.successAdd"
    />
</template>

<script>
// Components
import ToastNotification from "@/components/shared/ToastNotification.vue";

// Static
import STATIC_CONTENT from "@/static/content.json";

// Vuex
import { createNamespacedHelpers as nameSpace } from "vuex";
const {
	mapActions: cartActions,
} = nameSpace("cartModule");

export default {
  name: "ProductCard",
  props: {
    product: {
        type: Object,
        required: true,
    },
  },
  components: {
    ToastNotification,
  },
  data() {
    return {
        showToastNotif: false,
    };
  },
  computed: {
    CONTENT() {
        return STATIC_CONTENT;
    },
  },
  methods: {
    ...cartActions([
        "addToCartVuex",
    ]),
    viewProduct(data) {
        this.$router.push(`/product/${data.id}`);
    },
    addToCart(event, product) {
        event.stopPropagation(); // Prevents the card click event from firing

        const cart = {
            id: product?.id,
            title: product?.title,
            description: product?.description,
            price: product?.price,
            image: product?.images[0],
            categoryId: product?.category.id,
            categoryName: product?.category.name,
            quantity: 1,
        };
        this.addToCartVuex(cart);
        this.showToastNotif = true;
    },
  }
};
</script>