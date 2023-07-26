import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: "https://test.indusgame.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${window.localStorage.getItem("access_token")}`,
  },
});

export default axiosInstance;
