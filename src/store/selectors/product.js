// Get visible expenses

export default (products, title) => {
  if (title) {
    return products.find(product => product.title === title);
  } else {
    return {};
  }
};
