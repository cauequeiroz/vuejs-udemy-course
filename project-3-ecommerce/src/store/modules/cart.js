export default {
  namespaced: true,

  state() {
    return {
      items: [],
      total: 0,
      qty: 0
    }
  },

  actions: {
    addProductToCart({state, commit, rootGetters}, { id }) {
      const items = state.items;

      const product = rootGetters['product/items'].find(
        product => product.id == id
      );

      const productInCartIndex = items.findIndex(
        (ci) => ci.productId === id
      );

      if (productInCartIndex >= 0) {
        items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: id,
          title: product.title,
          image: product.image,
          price: product.price,
          qty: 1,
        };
        items.push(newItem);
      }

      commit('incrementQty');
      commit('updateTotal', state.total + product.price);
    },

    removeProductFromCart({state, commit}, id) {
      const productInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.productId === id
      );

      const product = state.items[productInCartIndex];

      state.items.splice(productInCartIndex, 1);
      commit('decrementQty', product.qty);
      commit('updateTotal', state.total - (product.price * product.qty));
    }
  },

  mutations: {
    incrementQty: state => state.qty++,
    decrementQty: (state, qty) => state.qty -= qty,
    updateTotal: (state, price) => state.total = price
  },

  getters: {
    items: state => state.items,
    total: state => state.total.toFixed(2),
    qty: state => state.qty
  }
};
