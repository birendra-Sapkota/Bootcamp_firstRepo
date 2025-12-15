import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card" style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      margin: "1rem",
      width: "200px",
      textAlign: "center"
    }}>
      <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)} style={{ padding: "0.5rem 1rem", marginTop: "0.5rem", cursor: "pointer" }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
