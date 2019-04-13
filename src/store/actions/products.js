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

export { setProducts, startSetProducts };
