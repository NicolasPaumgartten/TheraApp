import axios from "axios";

const api = axios.create({
  baseURL: "exp://192.168.0.2:8081",
});

export default api; 