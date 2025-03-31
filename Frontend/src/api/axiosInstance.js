import axios from "axios";

// The base URL for your API (from the environment variables)
const baseURL = import.meta.env.VITE_BASE_URL;

const createAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Request interceptor to add access token and CSRF token
  axiosInstance.interceptors.request.use(
    (config) => {
      // Get the access token from localStorage (if available)
      const accessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQzMTQxNjIxLCJpYXQiOjE3NDMwNTUyMjEsImp0aSI6Ijk3MWIyMjEyZGRhMzQ0MDc5YWM4Y2JjMDU3OGFiMDhmIiwidXNlcl9pZCI6MX0.5Q7VGuwEq4EWG5CHSdq0V1uiQ1dHMB0JLPrNVVPQs6M"; // Replace with dynamic access token if available
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }

      // Get CSRF token from cookies
      const csrfToken = document.cookie.match(/csrftoken=([\w-]+)/)?.[1];
      if (csrfToken) {
        config.headers["X-CSRFToken"] = csrfToken;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor for token refresh (optional)
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem("refreshToken");

        if (!refreshToken) {
          // Handle logout if refresh token is missing
          store.dispatch(logout());
          return Promise.reject(error);
        }

        try {
          const { data } = await axios.post(`${baseURL}user/refresh`, {
            refreshToken,
          });

          localStorage.setItem("accessToken", data.accessToken);
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${data.accessToken}`;

          return axiosInstance(originalRequest);
        } catch (err) {
          // Handle errors during token refresh
          store.dispatch(logout());
          return Promise.reject(err);
        }
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default createAxiosInstance;
