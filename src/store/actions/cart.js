import { decreaseAmount, increaseAmount } from "./products";

const addProductToCart = cartProduct => ({
  type: "ADD_PRODUCT_TO_CART",
  cartProduct
});

const startAddProductToCart = (product, qty) => {
  return dispatch => {
    dispatch(decreaseAmount(product, qty));
    const cartProduct = {
      title: product.title,
      qty,
      price: product.price,
      image: product.image
    };
    dispatch(addProductToCart(cartProduct));
  };
};

const removeProductFromCart = title => ({
  type: "REMOVE_PRODUCT_FROM_CART",
  title
});

const startRemoveProductFromCart = (title, qty) => {
  return dispatch => {
    dispatch(increaseAmount(title, qty));
    dispatch(removeProductFromCart(title));
  };
};

export { addProductToCart, startAddProductToCart, startRemoveProductFromCart };
