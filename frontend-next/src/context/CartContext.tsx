"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  quantity?: number;
  image?: string;
}

export interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void; // ✅ add clearCart
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p =>
          p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(p => p.id !== productId));
  };

  const clearCart = () => setCart([]); // ✅ implement clearCart

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

