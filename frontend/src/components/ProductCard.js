import React from "react";
import './ProductCard.css'; // Ensure this file exists

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image"/>
      <h3>{product.name}</h3>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating} ⭐</p>
    </div>
  );
}

export default ProductCard;

