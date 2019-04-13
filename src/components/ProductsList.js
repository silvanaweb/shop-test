import React from "react";
import { connect } from "react-redux";
import selectProducts from "../store/selectors/products";

const ProductsList = props => {
  console.log(props.products);
  return (
    <div className="content-container">
      <div>List</div>
    </div>
  );
};

export { ProductsList };

const mapStateToProps = state => {
  console.log("state", state);
  console.log("ProductsList", state.products);
  return {
    products: selectProducts(state.products)
  };
};

export default connect(mapStateToProps)(ProductsList);
