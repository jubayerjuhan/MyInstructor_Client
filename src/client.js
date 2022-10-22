import axios from "axios";
import { getLocalStorageData } from "./utils/localstorage.js";

const jwtToken = getLocalStorageData("jwtToken");

export const client = axios.create({
  baseURL: "https://first-energy-364305.ts.r.appspot.com/api",
  // baseURL: "http://localhost:5000/api",
  headers: {
    authorization: jwtToken,
  },
});
