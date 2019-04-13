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
      return [...state, action.cartProduct];
    case "REMOVE_PRODUCT_FROM_CART":
      return state.filter(item => item.title !== action.title);
    default:
      return state;
  }
};
