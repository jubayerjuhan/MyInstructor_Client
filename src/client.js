import axios from "axios";
import { getLocalStorageData } from "./utils/localstorage.js";

const jwtToken = getLocalStorageData("jwtToken");

export const client = axios.create({
  // baseURL:
  //   process.env.NODE_ENV === "production"
  //     ? "https://first-energy-364305.ts.r.appspot.com/api"
  //     : "http://localhost:5000/api",
  baseURL: "https://first-energy-364305.ts.r.appspot.com/api",
  headers: {
    authorization: `Bearer ${jwtToken}`,
  },
});
