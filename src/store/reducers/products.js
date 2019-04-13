const productsReducerDefaultState = [];

export default (state = productsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      console.log("reducers", action.products);
      return action.products;
    default:
      return state;
  }
};
