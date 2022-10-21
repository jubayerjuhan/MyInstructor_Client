import axios from "axios";

export const client = axios.create({
  baseURL: "https://first-energy-364305.ts.r.appspot.com/api",
  // baseURL: "http://localhost:5000/api",
});
