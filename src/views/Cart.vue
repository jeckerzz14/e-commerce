<template>
	<DefaultLayout>
		<v-container class="v-col-9" fluid>
			<v-row>
				<v-sheet
                    class="d-flex"
                >
					<v-col cols="12">
						<div v-for="item in CART_LIST" :key="item.id" class="cart-item">
							<img :src="item.image" alt="cart item" width="100" height="100">
							<p>{{ item.title }}</p>
							<span class="price">{{ item.price }}</span>

							<QuantityInput v-model="item.quantity" @changeQty="changeQty($event, item)"/>

							<div @click="removeItemFromCart(item.id)">REMOVE</div>
						</div>
						<span>Total: ₱{{ TOTAL_PRICE }}</span>
					</v-col>
				</v-sheet>
			</v-row>
		</v-container>
	</DefaultLayout>
</template>

<script>
// Components
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import QuantityInput from "@/components/QuantityInput.vue";

// Vuex
import { createNamespacedHelpers as nameSpace } from "vuex";
const {
    mapGetters: cartGetters,
	mapActions: cartActions,
} = nameSpace("cartModule");

export default {
	name: "Cart",
	components: {
		DefaultLayout,
		QuantityInput,
	},
	data() {
		return {
			cart: [],
		};
	},
	computed: {
		/**
		 * Get cart data from local storage
		 **/
		...cartGetters({
			vuexCart: "cart"
		}),
		CART_LIST() {
			return JSON.parse(JSON.stringify(this.vuexCart));
		},
		TOTAL_PRICE() {
			return this.CART_LIST.reduce((total, item) => {
				return total + item.quantity * item.price;
			}, 0);
		},
	},
	methods: {
		...cartActions([
			"updateCartVuex",
			"removeFromCartVuex",
		]),
		changeQty($event, item) {
			item.quantity = $event;
			this.updateCartVuex(item);
        },
		removeItemFromCart(itemId) {
			this.removeFromCartVuex(itemId);
		},
	}
};
</script>

<style lang="scss" scoped>
.cart-item {
	border: 1px solid red;
	display: grid;
}
</style>
