<template>
    <v-app-bar :elevation="2">
        <v-app-bar-title>
            <router-link to="/" class="text-decoration-none">Ecommerce</router-link>            
        </v-app-bar-title>
        <v-badge
            v-if="vxCartTotalQuantity > 0"
            class="px-4"
            color="red"
            :content="vxCartTotalQuantity"
            offset-x="6"
            offset-y="8"
            floating
        >
            <v-icon color="gray" size="32" class="cursor-pointer" @click="viewCart">mdi-cart-outline</v-icon>
        </v-badge>
        <v-icon v-else color="gray" size="32" class="cursor-pointer px-4" @click="viewCart">mdi-cart-outline</v-icon>
        <div class="login-wrapper px-4">Login</div>
    </v-app-bar>
</template>

<script>
// Vuex
import { createNamespacedHelpers as nameSpace } from "vuex";
const {
    mapGetters: cartGetters,
} = nameSpace("cartModule");

export default {
    name: "Header",
    computed: {
        ...cartGetters({
			vxCartTotalQuantity: "totalQuantity",
		}),
    },
    methods: {
        viewCart() {
            this.$router.push('/cart');
        },
    },
}
</script>

<style lang="scss" scoped>
</style>