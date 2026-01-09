import axios from "axios";

export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
};

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await axios.get("https://dummyjson.com/products");
  return res.data.products;
};

export const loginUser = async (username: string, password: string) => {
  const res = await axios.post("https://dummyjson.com/auth/login", { username, password });
  return res.data;
};