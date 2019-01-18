import mutations from '@/store/mutations'

const { ERROR_NOT_ENOUGH_MONEY, ADD_ORDER, UPDATE_ORDER, ERROR_RESET } = mutations;

describe('smoke tests', () => {
  it('should exists a ERROR_NOT_ENOUGH_MONEY method', () => {
    expect(ERROR_NOT_ENOUGH_MONEY).toBeDefined();
  });

  it('should exists a UPDATE_ORDER method', () => {
    expect(UPDATE_ORDER).toBeDefined();
  });

  it('should exists a ADD_ORDER method', () => {
    expect(ADD_ORDER).toBeDefined();
  });

  it('should exists a ERROR_RESET method', () => {
    expect(ERROR_RESET).toBeDefined();
  });
});

describe('ERROR_NOT_ENOUGH_MONEY', () => {
  it('should update error message', () => {
    const state = { error: null };

    ERROR_NOT_ENOUGH_MONEY(state);

    expect(state.error).toBe('You must have enough funds to buy this stock.');
  })
})

describe('ERROR_RESET', () => {
  it('should update error message', () => {
    const state = { error: 'Lorem ipsum silor dot amet' };

    ERROR_RESET(state);

    expect(state.error).toBe(null);
  })
})

describe('ADD_ORDER', () => {
  it('should add a new stock', () => {
    const state = { wallet: [] };
    
    const stock = {
      name: "MSFT",
      company: "Microsoft Corporation",
      price: 105.15,
      quantity: 5
    };

    ADD_ORDER(state, stock);

    expect(state.wallet).toEqual(
      expect.arrayContaining([
        expect.objectContaining(stock)
      ])
    );
  })
})

describe('UPDATE_ORDER', () => {
  it('should update an existent stock', () => {
    const stock = {
      name: "MSFT",
      company: "Microsoft Corporation",
      price: 105.15,
      quantity: 5
    };

    const state = { wallet: [ stock ] };

    UPDATE_ORDER(state, { name: stock.name, quantity: 5 });

    expect(state.wallet).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ ...stock, quantity: 10 })
      ])
    );
  })
})