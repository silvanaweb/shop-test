import React from "react";
import { connect } from "react-redux";
import selectProduct from "../../store/selectors/product";
import "./style.css";

const Product = ({ product: { title, description, price, image } }) => {
  return (
    <div className="Product">
      <h2>{title}</h2>
      <div className="Product__body">
        <div>
          <img src={image} alt={title} />
        </div>
        <div className="Product__content">
          <p>£{price}</p>
          <p>{description}</p>
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

export default connect(mapStateToProps)(Product);
