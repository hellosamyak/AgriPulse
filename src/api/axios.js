import axios from "axios";

// 🌐 Auto-detect backend URL based on environment and window origin
const getBaseURL = () => {
  // ✅ 1. If running locally
  if (import.meta.env.DEV || window.location.hostname === "localhost") {
    return "http://127.0.0.1:8000";
  }

  // ✅ 2. If deployed on Vercel (frontend)
  if (window.location.hostname.includes("vercel.app")) {
    return "https://backend-agripulse.onrender.com";
  }

  // ✅ 3. Optional fallback (in case of future staging domains)
  return import.meta.env.VITE_BACKEND_URL || "https://backend-agripulse.onrender.com";
};

// ⚙️ Create Axios instance
const api = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // Keep false unless you use cookies/sessions
});

// 🧩 Optional: Debugging interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("🌐 API Error:", error?.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
