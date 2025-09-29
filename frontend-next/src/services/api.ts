export const API_BASE = "http://localhost:5000"; // your backend base URL

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

// ✅ Add this function for headings
export async function fetchHeadings() {
  const res = await fetch(`${API_BASE}/headings`);
  if (!res.ok) throw new Error("Failed to fetch headings");
  return res.json();
}
export async function fetchProductsByCategory(slug: string) {
  const res = await fetch(`http://localhost:5000/category/${slug}`);
  if (!res.ok) throw new Error("Failed to fetch category products");
  return res.json();
}

