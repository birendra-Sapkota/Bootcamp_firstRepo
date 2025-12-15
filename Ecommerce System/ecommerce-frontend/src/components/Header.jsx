import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/global.css";

const Header = () => {
  return (
    <header>
      <h1>E-Commerce</h1>
      <nav>
        <NavLink to="/" end>
          Products
        </NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/checkout">Checkout</NavLink>
      </nav>
    </header>
  );
};

export default Header;
