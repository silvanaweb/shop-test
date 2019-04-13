import React from "react";

const plural = qty => (qty === 1 ? "s" : "");

export const CartItem = ({ image, title, price, qty, onDelete }) => {
  const onDeleteItem = () => {
    onDelete(title, qty);
  };
  return (
    <div className="CartItem">
      <img src={image} alt={title} />
      <span>{title}</span>
      <span>
        {qty} piece{plural(qty)}
      </span>
      <span>£{price}</span>
      <button className="Button" onClick={onDeleteItem}>
        Delete
      </button>
    </div>
  );
};
