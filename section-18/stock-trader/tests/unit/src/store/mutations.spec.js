import mutations from '@/store/mutations';

const { buy, sell } = mutations;

describe('smoke tests', () => {
  it('should have a "buy" method', () => {
    expect(buy).toBeDefined();
  });

  it('should have a "sell" method', () => {
    expect(sell).toBeDefined();
  });
});

describe('buy', () => {
  it('should buy a new stock', () => {
    const state = { wallet: [], funds: 10000 };

    const stock = {
      name: "MSFT",
      company: "Microsoft Corporation",
      price: 105.15
    };

    const quantity = 4;

    buy(state, { stock, quantity });
    
    expect(state.wallet).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ ...stock, quantity })
      ])
    )
  });

  it('shouldnt buy when dont have the required fund', () => {
    const state = { wallet: [], funds: 100 };

    const stock = {
      name: "MSFT",
      company: "Microsoft Corporation",
      price: 105.15
    };

    const quantity = 4;

    buy(state, { stock, quantity });
    
    expect(state.wallet).toEqual([])
  })
});