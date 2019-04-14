export default (products, { category, text }) => {
  let filteredProducts = products;
  if (category) {
    filteredProducts = filteredProducts.filter(
      product => product.category.toLowerCase() === category
    );
  }
  if (text) {
    filteredProducts = filteredProducts.filter(product =>
      product.title.toLowerCase().includes(text.toLowerCase())
    );
  }

  return filteredProducts;
};
