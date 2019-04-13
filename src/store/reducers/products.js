const productsReducerDefaultState = [];

export default (state = productsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.products;

    case "DECREASE_AMOUNT": {
      const product = action.product;
      const products = state.map(p => {
        if (p.title === product.title) {
          return {
            ...p,
            amount: p.amount - action.qty
          };
        }
        return p;
      });
      return products;
    }
    case "INCREASE_AMOUNT": {
      const products = state.map(p => {
        if (p.title === action.title) {
          return {
            ...p,
            amount: p.amount + action.qty
          };
        }
        return p;
      });
      return products;
    }
    default:
      return state;
  }
};
