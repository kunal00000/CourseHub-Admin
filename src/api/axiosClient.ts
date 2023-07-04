import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token") || "";

export default axiosClient;
