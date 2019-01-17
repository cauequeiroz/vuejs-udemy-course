const invalidPayload = quantity => !quantity;

export default {
  buy: (state, { stock, quantity }) => {
    if (invalidPayload(quantity)) return;

    const cost = stock.price * quantity;

    if (state.funds >= cost) {
      state.funds -= cost;
      state.wallet.push({ ...stock, quantity });
    }
  },
  sell: (state, payload) => {
    if (invalidPayload(payload)) return;
    console.log('selling', payload)
  }
}
