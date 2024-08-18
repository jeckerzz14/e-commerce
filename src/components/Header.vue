<template>
    <v-app-bar :elevation="2">
        <v-app-bar-title>
            <img
                src="@/assets/images/app-logo.png"
                alt="brand logo"
                width="150"
                height="54"
                class="cursor-pointer zoom-on-hover"
                @click="goToHomepage"
            />
        </v-app-bar-title>
        <v-badge
            v-if="vxCartTotalQuantity > 0"
            :class="['px-4', { 'slide-fade-enter': isAnimate }]"
            color="red"
            :content="vxCartTotalQuantity"
            offset-x="6"
            offset-y="8"
            floating
        >
            <v-icon color="gray" size="32" class="cursor-pointer" @click="viewCart">mdi-cart-outline</v-icon>
        </v-badge>
        <v-icon v-else color="gray" size="32" class="cursor-pointer px-4" @click="viewCart">mdi-cart-outline</v-icon>

        <!-- Profile -->
        <v-avatar color="orange-lighten-2" class="mx-6">
            <span class="text-h6">JT</span>
        </v-avatar>      
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
    data() {
        return {
            isAnimate: false,
        };
    },
    computed: {
        ...cartGetters({
			vxCartTotalQuantity: "totalQuantity",
		}),
    },
    methods: {
        viewCart() {
            this.$router.push('/cart');
        },
        goToHomepage() {
            this.$router.push('/');
        },
    },
    watch: {
        vxCartTotalQuantity(val) {
            if (val) {
                this.isAnimate = true;

                setTimeout(() => {
                    this.isAnimate = false;
                }, 500)
            }
        },
    },
}
</script>