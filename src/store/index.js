import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

// Modules
import cartModule from "@/store/modules/cartModule.js";

export default createStore({
  modules: {
    cartModule,
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage,  // Use localStorage to persist state
    }),
  ],
});
