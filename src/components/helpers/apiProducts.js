const API_FAKE_URL = "http://localhost:8000/products";

export async function getProducts() {
  const res = await fetch(`${API_FAKE_URL}`);

  if (!res.ok) throw new Error("Failed getting menu");

  const data  = await res.json();
  return data;
}
