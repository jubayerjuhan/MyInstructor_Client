import { client } from "../client";

export const getCurrentUser = async () => {
  try {
    const { data } = await client.get("/me");
    return data.user;
  } catch (error) {
    return false;
  }
};
