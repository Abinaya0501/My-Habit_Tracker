import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

const API = axios.create({
  baseURL: `${apiBaseUrl}/api/habits`,
});

export const getHabits = () => API.get("/");
export const addHabit = (data) => API.post("/", data);
export const updateHabit = (id, data) => API.put(`/${id}`, data);
export const deleteHabit = (id) => API.delete(`/${id}`);