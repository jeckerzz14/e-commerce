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
                            
                            <div class="price my-3"> ₱{{ product?.data.price }} </div>
                        </div>

                        <div class="button-wrapper my-3">
                            <v-btn text="BUY NOW" variant="tonal" color="orange-darken-1"></v-btn>
                            <v-btn text="ADD TO CART" variant="tonal" color="deep-orange-darken-1"></v-btn>
                        </div>
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

// API
import productsApi from "@/api/productsApi.js";

export default {
    name: "Product",
    components: {
        DefaultLayout,
    },
    data() {
        return {
            productId: this.$route.params?.id,
            product: {
                data: [],
                isLoading: false,
            },
        };
    },
    async mounted() {
        await this.getProductById();
    },
    methods: {
        async getProductById() {
            try {
                this.product.isLoading = true;
                const response = await productsApi.getProductById(this.productId);
                this.product.data = response.data;
                this.product.isLoading = false;

            } catch (error) {
                console.error("ProductView - getProductById - Error fetching data:", error);
                this.product.isLoading = false;
            }
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
        color: $warning;
        opacity: 100;
    }
</style>