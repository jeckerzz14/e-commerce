<template>
    <DefaultLayout>
        <v-container class="v-col-9" fluid>
            <v-row v-if="!product.isLoading">
                <v-sheet
                    class="d-flex"
                >
                    <v-col cols="6" md="6">
                        <!-- Carousel -->
                        <v-carousel show-arrows="hover">
                            <v-carousel-item
                                v-for="(item, index) in product?.data.images" :key="index"
                                :src="item"
                                alt="product image"
                                cover
                                loading="lazy"
                            ></v-carousel-item>
                        </v-carousel>
                    </v-col>
                    <v-col cols="6" md="6" class="wrapper-right">
                        <div class="box">
                            <v-chip color="primary">{{ product?.data.category.name }}</v-chip>
                            <h2 class="my-3">{{ product?.data.title }}</h2>
                            <p class="font-thin my-3">{{ product?.data.description }}</p>
    
                            <v-divider></v-divider>
                            
                            <div class="price my-3"> {{ product?.data.price }} </div>

                            <div class="font-extra-light-italic mb-2">Total Price: ₱{{ TOTAL_PRICE || product?.data.price }}</div>
                        </div>

                        <v-row no-gutters>
                            <v-col cols="6">
                                <QuantityInput v-model="product.quantity" @changeQty="changeQty"/>
                            </v-col>
                        </v-row>

                        <div class="button-wrapper my-3">
                            <v-btn :text="CONTENT.buttonText.buyNow" variant="tonal" color="orange-darken-1" size="large" @click="buyNow"></v-btn>
                            <v-btn :text="CONTENT.buttonText.addToCart" variant="tonal" color="deep-orange-darken-1" size="large" @click="addToCart"></v-btn>
                        </div>

                        <ToastNotification 
                            v-model="showToastNotif"
                            :message="CONTENT.cart.successAdd"
                        />
                    </v-col>
                </v-sheet> 
            </v-row>
            <v-skeleton-loader type="card" v-else></v-skeleton-loader>
        </v-container>
    </DefaultLayout>
</template>

<script>
// Components
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import QuantityInput from "@/components/shared/QuantityInput.vue";
import ToastNotification from "@/components/shared/ToastNotification.vue";

// API
import productsApi from "@/api/productsApi.js";

// Static
import STATIC_CONTENT from "@/static/content.json";

// Vuex
import { mapActions } from 'vuex';

export default {
    name: "Product",
    components: {
        DefaultLayout,
        QuantityInput,
        ToastNotification,
    },
    data() {
        return {
            productId: this.$route.params?.id,
            product: {
                data: [],
                isLoading: false,
                quantity: 0,
            },
            showToastNotif: false,
        };
    },
    computed: {
        TOTAL_PRICE() {
            return this.product.data.price * this.product.quantity;
        },
        CONTENT() {
			return STATIC_CONTENT;
		},
    },
    async mounted() {
        await this.getProductById();
    },
    methods: {
        ...mapActions("cartModule", {
            addToCartVuex: "addToCartVuex",
        }),
        async getProductById() {
            try {
                this.product.isLoading = true;
                const response = await productsApi.getProductById(this.productId);
                this.product.data = response.data;
                this.product.quantity = 1; 
                this.product.isLoading = false;

            } catch (error) {
                console.error("ProductView - getProductById - Error fetching data:", error);
                this.product.isLoading = false;
            }
        },
        addToCart() {
            // build cart object
            const cart = {
                id: this.product?.data.id,
                title: this.product?.data.title,
                description: this.product?.data.description,
                price: this.product?.data.price,
                image: this.product?.data.images[0],
                categoryId: this.product?.data.category.id,
                categoryName: this.product?.data.category.name,
                quantity: this.product?.quantity,
            };
            this.addToCartVuex(cart);
            this.showToastNotif = true;
        },
        changeQty(qty) {
            if (qty) {
                this.product.quantity = qty;
            }
        },
        buyNow() {
            this.$router.push('/payment');
        },
    },
}
</script>

<style lang="scss" scoped>
    @import "@/assets/styles/settings/_colors.scss";

    .wrapper-right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .button-wrapper {
        display: flex;
        justify-content: space-between;

        button {
            width: 50%;
        }
    }

    .price {
        font-size: 1.875rem;
    }
</style>