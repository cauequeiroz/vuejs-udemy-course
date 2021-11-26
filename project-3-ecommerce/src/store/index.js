import { createStore } from 'vuex';
import router from '../router.js';

import productStore from './modules/product.js';
import cartStore from './modules/cart.js';

const store = createStore({
  modules: {
    product: productStore,
    cart: cartStore
  },

  state() {
    return {
      isLoggedIn: false
    }
  },

  getters: {
    isLoggedIn: state => state.isLoggedIn,
  },

  mutations: {
    SET_AUTH: (state, status) => {
      state.isLoggedIn = status;
    }
  },

  actions: {
    login(context) {
      context.commit('SET_AUTH', true);
    },

    logout(context) {
      context.commit('SET_AUTH', false);
      router.push('/products');
    }
  }
});

export default store;
