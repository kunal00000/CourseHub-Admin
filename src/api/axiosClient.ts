import axios, { AxiosInstance } from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/";
const axiosClient: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token") || "";

export default axiosClient;
