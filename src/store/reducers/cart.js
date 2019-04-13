const cartReducerDefaultState = [];

// cart product {
// image,
//   title,
//   price,
//   qty
// }

export default (state = cartReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      console.log("current cart", state);
      return [...state, action.cartProduct];
    default:
      return state;
  }
};
