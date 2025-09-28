import React from "react";
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p><span>Company:</span> {product.company}</p>
      <p><span>Category:</span> {product.category}</p>
      <p><span>Price:</span> ${product.price}</p>
      <p><span>Rating:</span> {product.rating} ⭐</p>
      <p className="description">{product.description}</p>
      <p className="specifications"><span>Specs:</span> {product.specifications}</p>
      <p className="reviews"><span>Reviews:</span> {product.reviews}</p>
    </div>
  );
}

export default ProductCard;



