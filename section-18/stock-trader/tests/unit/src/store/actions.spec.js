import actions from '@/store/actions'

const { buy } = actions;

describe('smoke tests', () => {
  it('should exists a "buy" method', () => {
    expect(buy).toBeDefined();
  })
});

describe('buy', () => {
  let commit = null;

  beforeEach(() => {
    commit = jest.fn();
  });

  afterEach(() => {
    commit = null;
  });

  it('should buy a stock', () => {
    const state = { wallet: [], funds: 10000 };

    const stock = {
      name: "MSFT",
      company: "Microsoft Corporation",
      price: 105.15
    };

    const quantity = 4;
    
    buy({ commit, state }, { stock, quantity });

    expect(commit.mock.calls).toEqual([
      ['ERROR_RESET'],
      ['ADD_ORDER', { ...stock, quantity }]
    ]);
  });

  it('should update stock quantity if user already has the stock', () => {
    const stock = {
      name: "MSFT",
      company: "Microsoft Corporation",
      price: 105.15
    };

    const quantity = 4;
    
    const state = { wallet: [ { ...stock, quantity: 10 } ], funds: 10000 };
    
    buy({ commit, state }, { stock, quantity });

    expect(commit.mock.calls).toEqual([
      ['ERROR_RESET'],
      ['UPDATE_ORDER', { name: stock.name, quantity }]
    ]);
  });

  it('shouldnt buy if user hasnt enough funds', () => {
    const state = { wallet: [], funds: 50 };

    const stock = {
      name: "MSFT",
      company: "Microsoft Corporation",
      price: 105.15
    };

    const quantity = 4;    
    
    buy({ commit, state }, { stock, quantity });

    expect(commit.mock.calls).toEqual([
      ['ERROR_NOT_ENOUGH_MONEY']
    ]);
  });
});