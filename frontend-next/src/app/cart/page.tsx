"use client";

import React from "react";
import { useCart } from "../../context/CartContext";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0)
    return <p className="p-4 text-center">Your cart is empty</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border rounded p-2"
          >
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p>
                ${item.price} x {item.quantity}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <p className="font-bold text-lg">Total: ${total.toFixed(2)}</p>
        <button
          onClick={clearCart}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartPage;
