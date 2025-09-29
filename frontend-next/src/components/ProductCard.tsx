import { Product } from "@/types";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col cursor-pointer">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto max-h-64 md:max-h-72 object-contain rounded-lg"
        />
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-lg mb-1">{product.title}</h2>
            <p className="text-gray-600 text-sm">{product.author}</p>
          </div>
          <div className="mt-2">
            <p className="text-blue-600 font-semibold">${product.price}</p>
            <p className="text-yellow-500 font-semibold">Rating: {product.rating} ⭐</p>
          </div>
        </div>
      </div>
    </Link>
  );
}











