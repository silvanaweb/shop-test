import { decreaseAmount } from "./products";

const addProductToCart = cartProduct => ({
  type: "ADD_PRODUCT_TO_CART",
  cartProduct
});

const startAddProductToCart = (product, qty) => {
  console.log("to cart", product, qty);
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

export { addProductToCart, startAddProductToCart };
