import React from "react";
import { Link } from "react-router-dom";

const ProductListItem = ({ newItem, title }) => (
  <div>
    <h3>
      <Link
        to={`/product/${encodeURIComponent(title)}`}
        className="Product__link"
      >
        {title} {newItem && <span className="Product__new">- New</span>}
      </Link>
    </h3>
  </div>
);

export { ProductListItem };
