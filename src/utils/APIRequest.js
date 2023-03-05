import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;

export const makeRequest = axios.create({
  baseURL: base_url,
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
  },
  params: {
    hl: "en",
    gl: "IN",
  },
});
