export default {
  buy: ({ commit, state }, payload) => {
    const { wallet, funds } = state;
    const { stock, quantity } = payload;

    if (stock.price * quantity > funds) {
      commit('ERROR_NOT_ENOUGH_MONEY');
      return;
    }

    const alreadyHasStock = wallet.some(item => item.name == stock.name );
    
    if (alreadyHasStock) {
      commit('UPDATE_ORDER', { name: stock.name, quantity });
    } else {
      commit('ADD_ORDER', { ...stock, quantity });    
    }    
  }
}