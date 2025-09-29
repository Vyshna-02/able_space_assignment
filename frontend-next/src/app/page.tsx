// "use client";

import useSWR from "swr";
// import ProductList from "@/components/ProductList";

// const fetcher = (url: string) => fetch(url).then(res => res.json());

// export default function ProductsPage() {
//   const { data: products, error } = useSWR("http://localhost:5000/products", fetcher);

//   if (error) return <div className="p-6 text-red-500">Failed to load products.</div>;
//   if (!products) return <div className="p-6">Loading...</div>;

//   return (
//     <main className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">All Books</h1>
//       <ProductList products={products} />
//     </main>
//   );
// }

"use client";

import ProductList from "@/components/ProductList";

export default function HomePage() {
  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">All Books</h1>
      <ProductList /> {/* no products prop */}
    </main>
  );
}


