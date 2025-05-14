import axios from "axios";
import { getToken,removeToken } from "../utils/token";
import { nextTick } from "vue";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
        //Token geçersiz veya süresi dolmuş
      removeToken();
      nextTick(() => {
        router.push({ name: "signin" });
      });
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
