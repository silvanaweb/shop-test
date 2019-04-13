import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const categories = ["trousers", "shorts", "polos", "gifts"];
const Header = () => {
  return (
    <header className="Header">
      <div className="content-container">
        <div className="Header__content">
          {categories.map(cat => (
            <NavLink key={cat} to={`/products/${cat}`} className="Header__link">
              {cat}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export { Header };
