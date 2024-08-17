<template>
	<DefaultLayout>
		<v-container class="v-col-9" fluid>
			<v-row>
				<v-col cols="12">
					<h2>Shopping Cart</h2>
					<v-sheet elevation="1" border rounded>
						<div v-for="item in CART_LIST" :key="item.id" class="cart-item py-3 px-3">
							<img :src="item.image" alt="cart item" width="100" height="100">
							<div class="cart-name">
								<span>{{ item.title }}</span>
								<span class="price">{{ item.price }}</span>
							</div>
							<QuantityInput v-model="item.quantity" :showText="false" @changeQty="changeQty($event, item)"/>
							<v-icon color="red-lighten-1" size="32" class="cursor-pointer cart-delete" @click="removeItemFromCart(item.id)">mdi-trash-can</v-icon>	
						</div>
						
						<div class="font-bold big">Total: <span class="price">{{ TOTAL_PRICE }}</span></div>
					</v-sheet>
				</v-col>
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
	display: grid;
	grid-template-columns: 0.25fr 1.5fr 0.1fr .5fr;
	grid-template-rows: 1fr;

	.cart-name {
		grid-column: 2 / 3;
		display: flex;
		flex-direction: column;
		padding: 0 1rem;

		span:nth-child(1) {
			font-size: 1.25rem;
		}
	}

	.cart-delete {
		grid-column: 3 / 4;
		grid-row: 1 / 3;
		padding-top: 1.75rem;
	}

	.qty-wrapper {
		grid-column: 4 / 5;
	}
}


.big {
	font-size: 1.25rem;
	padding: 1rem;

	span {
		font-size: 1.25rem;
	}
}
</style>
