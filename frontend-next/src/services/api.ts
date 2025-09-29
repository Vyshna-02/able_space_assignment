export const API_BASE = "http://localhost:5000";

export async function fetchProducts() {
  const res = await fetch(`${API_BASE}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function fetchProductById(id: number) {
  const res = await fetch(`${API_BASE}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}
