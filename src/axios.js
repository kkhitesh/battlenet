import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://test.indusgame.com/",
  timeout: 10000,
  headers: {
    Authorization: window.localStorage.getItem("access_token"),
  },
});
