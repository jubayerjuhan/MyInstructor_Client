import axios from "axios";
import { getLocalStorageData } from "./utils/localstorage.js";

const jwtToken = getLocalStorageData("jwtToken");

export const client = axios.create({
  // baseURL:
  //   process.env.NODE_ENV === "production"
  //     ? "https://my-instructor-server.ts.r.appspot.com/api"
  //     : "http://localhost:5000/api",
  baseURL: "https://my-instructor-server.ts.r.appspot.com/api",
  headers: {
    authorization: `Bearer ${jwtToken}`,
  },
});
