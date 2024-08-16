export default {
  namespaced: true,
  state: {
    cart: [],
  },
  getters: {
    cart(state) {
      return state.cart;
    },
    cartItemCount(state) {
      return state.cart.length;
    },
    cartTotalPrice(state) {
      return state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    clearCart(state) {
      state.cart = [];
    },
  },
  mutations: {
    addToCart(state, obj) {
      // Check if product id already exists
      const result = state.cart.find((el) => el.id === obj.id);

      if (!result) {
        state.cart.push(obj);
      } else {
        // map existing add qty
        return state.cart.map((el) => {
          if (el.id === obj.id) {
            el.quantity += obj.quantity;
          }
        });
      }
    },
    updateCart(state, obj) {
        return state.cart.map((el) => {
            if (el.id === obj.id) {
                el.quantity = obj.quantity;
            }
        })
    },
    removeFromCart(state, itemId) {
        state.cart = state.cart.filter((item) => item.id !== itemId);
    },
  },
  actions: {
    addToCartVuex({ commit }, obj) {
      // Create deep copy
      const objCopy = JSON.parse(JSON.stringify(obj));

      // Build cart object
      const cart = {
        id: objCopy?.data.id,
        title: objCopy?.data.title,
        description: objCopy?.data.description,
        price: objCopy?.data.price,
        image: objCopy?.data.images[0],
        categoryId: objCopy?.data.category.id,
        categoryName: objCopy?.data.category.name,
        quantity: objCopy?.quantity,
      };
      commit("addToCart", cart);
    },
    updateCartVuex({ commit }, obj) {
        const cart = {
            id: obj?.id,
            quantity: obj?.quantity,
        };
        commit("updateCart", cart);
    },
    removeFromCartVuex({ commit }, itemId) {
        commit("removeFromCart", itemId);
    }
  },
};
