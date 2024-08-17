export default {
    name: "ProductMixins",
    methods: {
        /**
         * Checkout
         * @param Array
         */
        async mxCheckout(arrProduct) {
            try {
                // some logic on backend services...
                return arrProduct;
            } catch(err) {
                console.error(`product-mixins - mxCheckout::`, err);
                throw error;
            }
        },
    },
};