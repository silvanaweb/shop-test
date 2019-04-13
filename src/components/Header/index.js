import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import CartIcon from "../../assets/cart";
import "./style.css";

const categories = ["trousers", "jeans", "shorts", "polos", "gifts"];

const Header = ({ cart, history }) => {
  const cartColor = !!cart.length ? "#008080" : "#afd1d1";
  const cartDisabled = !!cart.length ? false : true;

  const onGoToCart = () => {
    history.push("/cart");
  };

  return (
    <header className="Header">
      <div className="content-container">
        <div className="Header__content">
          <div className="Header__left">
            {categories.map(cat => (
              <NavLink
                key={cat}
                to={`/products/${cat}`}
                className="Header__link"
              >
                {cat}
              </NavLink>
            ))}
          </div>
          <div className="Header__right">
            <button
              disabled={cartDisabled}
              className="Button--neutral "
              onClick={onGoToCart}
            >
              <CartIcon style={{ height: "4rem" }} color={cartColor} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state, props) => {
  return {
    cart: state.cart
  };
};

export { Header };

export default connect(mapStateToProps)(Header);
