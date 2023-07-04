import axiosClient from "../api/axiosClient";
import { SuccessNotification } from "../utils/notification";

export const postSignup = async (email: string, password: string) => {
  const { data } = await axiosClient.post("admin/signup", {
    username: email,
    password: password,
  });
  if (data.message === "Admin created successfully") {
    console.log("signup success");
    SuccessNotification(data.message);
    localStorage.setItem("token", data.token);
  }
  return data;
};

export const postLogin = async (email: string, password: string) => {
  const { data } = await axiosClient.post(
    "admin/login",
    {},
    {
      headers: {
        username: email,
        password: password,
      },
    }
  );
  if (data.message === "Logged in successfully") {
    console.log("login success");
    SuccessNotification(data.message);
    localStorage.setItem("token", data.token);
  }
  return data;
};
