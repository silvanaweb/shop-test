import React, { useState } from "react";
import { connect } from "react-redux";
import { startAddProductToCart } from "../../store/actions/cart";
import selectProduct from "../../store/selectors/product";
import ReadMore from "../ReadMore";
import "./style.css";

const Product = ({
  product: { title, description, price, image, amount },
  product,
  startAddProductToCart
}) => {
  const [quantity, setQuantity] = useState(1);

  const onSetQuantity = e => {
    const q = e.target.value;
    if (q > 1 && q <= amount) {
      setQuantity(q);
    }
  };
  const onAddProductToCart = () => {
    setQuantity(1);
    startAddProductToCart(product, quantity);
  };
  return (
    <div className="Product">
      <h2>{title}</h2>
      <div className="Product__body">
        <div className="Product__image">
          <img src={image} alt={title} />
        </div>
        <div className="Product__content">
          <p>£{price}</p>
          <div className="Product__cart">
            {amount ? (
              <>
                Qty{" "}
                <input
                  type="number"
                  onChange={onSetQuantity}
                  value={quantity}
                  className="Input Input--number "
                />{" "}
                <button className="Button" onClick={onAddProductToCart}>
                  Add to Cart
                </button>
              </>
            ) : (
              <span>Stock not available</span>
            )}
          </div>
          <div>
            <ReadMore lines={2}>{description}</ReadMore>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Product };

const mapStateToProps = (state, props) => {
  const title = decodeURIComponent(props.match.params.title);
  return {
    product: selectProduct(state.products, title)
  };
};

const mapDispatchToProps = dispatch => ({
  startAddProductToCart: (product, qty) =>
    dispatch(startAddProductToCart(product, qty))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
