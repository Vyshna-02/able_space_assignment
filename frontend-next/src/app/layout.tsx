"use client";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "../context/CartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar /> {/* Navbar stays inside provider if it uses cart */}
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}





