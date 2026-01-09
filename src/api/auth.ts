import axios from "axios";

const API_URL = "https://dummyjson.com/auth/login";

export interface LoginData {
  username: string;
  password: string;
}

export const loginUser = async (data: LoginData) => {
  const response = await axios.post(API_URL, data, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};