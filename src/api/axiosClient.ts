import axios, { AxiosInstance } from "axios";

const axiosClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token") || "";

export default axiosClient;
