import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const register = async (username: string, password: string) => {
  return await axios.put(API_URL + "/auth/register", {
    username,
    password,
  });
};

export const login = async (username: string, password: string) => {
  return await axios.post(API_URL + "/auth/login", {
    username,
    password,
  });
};

export const logout = () => {
  localStorage.removeItem("token");
};
