import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: "https://test.indusgame.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${window.localStorage.getItem("access_token")}`,
  },
});

function refresh_token() {
  console.log("Refreshing access token");
  return Axios.post("https://test.indusgame.com/auths", {
    refreshToken: window.localStorage.getItem("refresh_token"),
  });
}

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const config = error.config;
    if (error.response && error.response.status === 401) {
      let res = await refresh_token();
      if (res.data.access_token) {
        localStorage.setItem("access_token", res.data.auth.accessToken);
        localStorage.setItem("refresh_token", res.data.auth.refreshToken);
        return axiosInstance(config);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
