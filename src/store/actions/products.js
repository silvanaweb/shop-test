// SET_PRODUCTS
const setProducts = products => ({
  type: "SET_PRODUCTS",
  products
});

const startSetProducts = () => {
  return dispatch => {
    // fetch products from DB
    return fetch("https://my-json-server.typicode.com/spokeldn/react-test/db")
      .then(res => res.json())
      .then(result => {
        const { products } = result;
        dispatch(setProducts(products));
      });
  };
};

const decreaseAmount = (product, qty) => ({
  type: "DECREASE_AMOUNT",
  product,
  qty
});
const increaseAmount = (title, qty) => ({
  type: "INCREASE_AMOUNT",
  title,
  qty
});

export { setProducts, startSetProducts, decreaseAmount, increaseAmount };
