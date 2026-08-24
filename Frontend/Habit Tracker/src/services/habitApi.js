import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/habits",
});

export const getHabits = () => API.get("/");
export const addHabit = (data) => API.post("/", data);
export const updateHabit = (id, data) => API.put(`/${id}`, data);
export const deleteHabit = (id) => API.delete(`/${id}`);