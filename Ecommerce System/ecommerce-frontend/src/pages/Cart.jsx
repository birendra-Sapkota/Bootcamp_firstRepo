import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice.jsx";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{ marginBottom: "1rem" }}>
                {item.name} - ${item.price}{" "}
                <button onClick={() => dispatch(removeFromCart(index))}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={() => dispatch(clearCart())} style={{ marginTop: "1rem" }}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
