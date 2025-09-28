import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import './ProductList.css'; // add styling for grid layout

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch from backend
    fetch("http://127.0.0.1:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;




