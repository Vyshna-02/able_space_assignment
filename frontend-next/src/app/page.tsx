"use client";

import ProductList from "@/components/ProductList";

export default function HomePage() {
  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">All Books</h1>
      <ProductList />
    </main>
  );
}


