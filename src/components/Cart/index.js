import React from "react";
import { connect } from "react-redux";
import { startRemoveProductFromCart } from "../../store/actions/cart";
import { CartItem } from "./CartItem";
import "./style.css";

const calcTotal = cart =>
  cart.map(x => x.price * x.qty).reduce((acc, cv) => acc + cv, 0);

const Cart = ({ cart, startRemoveProductFromCart }) => {
  const onDeleteItemFromCart = (title, qty) => {
    startRemoveProductFromCart(title, qty);
  };

  return (
    <div>
      <h2>Cart</h2>
      {!!cart.length ? (
        <>
          <div>
            {cart.map(item => (
              <CartItem
                key={item.title}
                {...item}
                onDelete={onDeleteItemFromCart}
              />
            ))}
          </div>
          <div className="Cart__total">
            TOTAL <span>{calcTotal(cart)}</span>
            <button
              className="Button"
              style={{
                marginLeft: "2rem",
                paddingLeft: "4rem",
                paddingRight: "4rem"
              }}
            >
              Pay
            </button>
          </div>
        </>
      ) : (
        <h3>Your shopping cart is empty</h3>
      )}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => ({
  startRemoveProductFromCart: (title, qty) =>
    dispatch(startRemoveProductFromCart(title, qty))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
