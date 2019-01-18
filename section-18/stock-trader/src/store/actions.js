export default {
  buy: ({ commit, state }, payload) => {
    const { wallet, funds } = state;
    const { stock, quantity } = payload;
    const cost = stock.price * quantity;

    if (cost > funds) {
      commit('ERROR_NOT_ENOUGH_MONEY');
      return;
    }

    commit('ERROR_RESET');
    commit('WITHDRAW_FUNDS', cost);

    const alreadyHasStock = wallet.some(item => item.name == stock.name );
    
    if (alreadyHasStock) {
      commit('UPDATE_ORDER', { name: stock.name, quantity });
    } else {
      commit('ADD_ORDER', { ...stock, quantity });    
    }    
  }
}