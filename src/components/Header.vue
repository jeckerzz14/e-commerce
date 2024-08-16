<template>
    <v-app-bar :elevation="2">
        <v-app-bar-title>
            <router-link to="/" class="text-decoration-none">Ecommerce</router-link>            
        </v-app-bar-title>
        <v-badge
            class="px-4"
            color="red"
            :content="7"
            offset-x="6"
            offset-y="8"
            floating
        >
            <v-icon color="gray" size="32" class="cursor-pointer" @click="viewCart">mdi-cart-outline</v-icon>
        </v-badge>
        <!-- <v-icon color="primary" size="32" class="cursor-pointer" @click="viewCart">mdi-cart-outline</v-icon> -->
        <div class="login-wrapper px-4">Login</div>
    </v-app-bar>
</template>

<script>
    export default {
        name: "Header",
        methods: {
            viewCart() {
                this.$router.push('/cart');
            },
        },
    }
</script>

<style lang="scss" scoped>
</style>