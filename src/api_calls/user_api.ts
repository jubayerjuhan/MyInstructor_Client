import { client } from "../client";
import { User } from "../typings/reduxTypings";

export const getCurrentUser = async () => {
  try {
    const { data } = await client.get("/me");
    return data.user;
  } catch (error) {
    return false;
  }
};

// edit user
export const editUser = async (user: User) => {
  try {
    const { data } = await client.put("/edit-user", user);
    return data.user;
  } catch (error) {
    return false;
  }
};

// update avater
export const updateAvater = async (avater: any) => {
  try {
    const { data } = await client.put("/update-avater", avater);
    return data.user;
  } catch (error) {
    return false;
  }
};
