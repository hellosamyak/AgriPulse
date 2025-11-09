import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://127.0.0.1:8000" // Local FastAPI
      : "https://backend-agripulse.onrender.com", // ✅ Render backend URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // disable unless you’re handling cookies/sessions
});

// ✅ Optional: Axios interceptor for debugging network errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("🌐 API Error:", error?.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
