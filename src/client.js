import axios from "axios";
import { getLocalStorageData } from "./utils/localstorage.js";

const jwtToken = getLocalStorageData("jwtToken");
const adminJwtToken = getLocalStorageData("adminJwtToken");

export const client = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://my-instructor-server.ts.r.appspot.com/api"
      : "http://localhost:5000/api",
  // baseURL: "https://portfolio-368819.uc.r.appspot.com/api",
  headers: {
    authorization: `Bearer ${jwtToken}`,
  },
});

export const admin = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://my-instructor-server.ts.r.appspot.com/api/admin"
      : "http://localhost:5000/api/admin",
  // baseURL: "https://portfolio-368819.uc.r.appspot.com/api/admin",
  headers: {
    authorization: `Bearer ${adminJwtToken}`,
  },
});
