"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts, fetchHeadings } from "@/services/api";
import { Product, Heading } from "@/types";
import Link from "next/link";

const ProductList: React.FC = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const headingsData: Heading[] = await fetchHeadings().catch(() => [
          { id: 1, title: "Books", slug: "books" },
          { id: 2, title: "Children's Books", slug: "childrens-books" },
        ]);
        setHeadings(headingsData || []);

        const productsData: Product[] = await fetchProducts();
        setProducts(productsData || []);
      } catch (err: any) {
        setError(err.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <p className="p-6">Loading products...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Headings / Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Explore by Category</h2>
        <div className="flex gap-4 overflow-x-auto">
          {headings.map((heading) => (
            <Link
              key={heading.id}
              href={`/catagory/${heading.slug}`}
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              {heading.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;


