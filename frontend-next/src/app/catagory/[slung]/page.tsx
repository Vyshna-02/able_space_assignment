"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { fetchProducts } from "@/services/api";
import { Product } from "@/types";

export default function CategoryPage() {
  const params = useParams();
  const slung = Array.isArray(params.slung) ? params.slung[0] : params.slung;

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const allProducts: Product[] = await fetchProducts();

        if (slung) {
          const filtered = allProducts.filter(
            (p) => (p.category ?? "").toLowerCase() === slung.toLowerCase()
          );
          setFilteredProducts(filtered);
        } else {
          setFilteredProducts(allProducts);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to load products");
        }
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [slung]);

  if (loading) return <div className="p-6 text-center">Loading products...</div>;
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>;
  if (filteredProducts.length === 0)
    return <div className="p-6 text-center">No products found in this category.</div>;

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {slung?.replace("-", " ")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}






