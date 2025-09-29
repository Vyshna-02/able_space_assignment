// "use client";

// import { useParams } from "next/navigation";
// import useSWR from "swr";
// import { fetchProductById, fetchProducts } from "@/services/api";
// import ProductCard from "@/components/ProductCard";
// import { useCart } from "@/context/CartContext"; // <-- import CartContext

// export default function ProductDetail() {
//   const { id } = useParams();
//   const { addToCart } = useCart(); // <-- use cart hook

//   const { data: product, error: productError } = useSWR(
//     id ? `products/${id}` : null,
//     () => fetchProductById(Number(id))
//   );

//   const { data: allProducts } = useSWR("products", fetchProducts);

//   if (productError) return <div className="p-6 text-red-500">Failed to load product.</div>;
//   if (!product) return <div className="p-6">Loading...</div>;

//   const recommended =
//     allProducts?.filter((p: any) => p.id !== product.id).slice(0, 4) || [];

//   return (
//     <main className="p-6 max-w-6xl mx-auto">
//       {/* Product Info */}
//       <div className="rounded-lg shadow-md bg-white p-6 flex flex-col md:flex-row gap-6">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full md:w-1/2 h-[500px] object-contain rounded-lg"
//         />
//         <div className="flex-1 space-y-4">
//           <h1 className="text-3xl font-bold">{product.title}</h1>
//           <p className="text-gray-600 font-medium">Author: {product.author}</p>
//           <p className="text-gray-600 font-medium">Company: {product.company}</p>
//           <p className="text-gray-600 font-medium">Category: {product.category}</p>
//           <p className="text-xl font-semibold text-blue-600">${product.price}</p>
//           <p className="text-yellow-500 font-semibold">Rating: {product.rating} ⭐</p>
//           <p className="mt-2">{product.description}</p>
//           <p className="mt-2 text-gray-700">
//             <span className="font-semibold">Specs:</span> {product.specifications}
//           </p>
//           <p className="mt-2 text-gray-700">
//             <span className="font-semibold">Reviews:</span> {product.reviews}
//           </p>

//           {/* Add to Cart Button */}
//           <button
//             onClick={() => addToCart(product)}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       {/* Recommended Books */}
//       {recommended.length > 0 && (
//         <div className="mt-10">
//           <h2 className="text-2xl font-bold mb-4">Recommended Books</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {recommended.map((p: any) => (
//               <ProductCard key={p.id} product={p} />
//             ))}
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }


"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import { fetchProductById, fetchProducts } from "@/services/api";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const { data: product, error: productError } = useSWR(
    id ? `products/${id}` : null,
    () => fetchProductById(Number(id))
  );

  const { data: allProducts } = useSWR("products", fetchProducts);

  if (productError) return <div className="p-6 text-red-500">Failed to load product.</div>;
  if (!product) return <div className="p-6">Loading...</div>;

  const recommended =
    allProducts?.filter((p: any) => p.id !== product.id).slice(0, 4) || [];

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <div className="rounded-lg shadow-md bg-white p-6 flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-[500px] object-contain rounded-lg"
        />
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 font-medium">Author: {product.author}</p>
          <p className="text-xl font-semibold text-blue-600">${product.price}</p>
          <p>{product.description}</p>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {recommended.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Recommended Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {recommended.map((p: any) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}








