import React from "react";
import { connect } from "react-redux";

const Cart = ({ cart }) => {
  console.log(cart);
  return <div>cart</div>;
};

const mapStateToProps = (state, props) => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(Cart);
