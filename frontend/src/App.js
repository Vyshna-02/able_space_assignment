import React from "react";
import ProductList from "./components/ProductList";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>AbleSpace Product Showcase</h1>
        <p>Professional listing of top tech products</p>
      </header>
      <ProductList />
    </div>
  );
}

export default App;




