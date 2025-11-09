// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://127.0.0.1:8000"
      : "https://backend-agripulse.onrender.com",
});

export default api;
