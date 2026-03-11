const API_URL = "http://localhost:3000/api/v1/products";

export async function createProduct(product) {
  const token = localStorage.getItem("token");
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.message || "Failed to create product");
  }
  return data;
}
