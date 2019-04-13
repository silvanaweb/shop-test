const products = [
  {
    title: "Heroes",
    category: "Trousers",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    amount: 2,
    price: 12.99,
    image: "https://dummyimage.com/300x200/9e3d9e/363ead",
    new: true
  },
  {
    title: "Sharps",
    category: "Trousers",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    amount: 6,
    price: 45.99,
    image: "https://dummyimage.com/300x200/9e3d9e/363ead",
    new: false
  },
  {
    title: "Dessert sand",
    category: "Jeans",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    amount: 2,
    price: 66.49,
    image: "https://dummyimage.com/300x200/9e3d9e/363ead",
    new: true
  },
  {
    title: "Blue wave",
    category: "Jeans",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    amount: 1,
    price: 34.99,
    image: "https://dummyimage.com/300x200/9e3d9e/363ead",
    new: false
  }
];

// SET_PRODUCTS
const setProducts = products => ({
  type: "SET_PRODUCTS",
  products
});

const startSetProducts = () => {
  return dispatch => {
    // fetch products from DB
    return new Promise(resolve => {
      resolve(products);
      dispatch(setProducts(products));
    });
  };
};

export { setProducts, startSetProducts };
