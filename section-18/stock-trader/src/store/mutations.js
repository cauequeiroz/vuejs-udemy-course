export default {
  ERROR_NOT_ENOUGH_MONEY: state => {
    state.error = 'You must have enough funds to buy this stock.'
  },

  ERROR_RESET: state => {
    state.error = null
  },

  ADD_ORDER: (state, stock) => {
    state.wallet.push(stock)
  },

  UPDATE_ORDER: (state, { name, quantity }) => {
    state.wallet.map(stock => {
      if (stock.name == name) stock.quantity += quantity;
    });
  }
}