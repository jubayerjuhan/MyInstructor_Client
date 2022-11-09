import { admin } from "../../client";

export const addCar = async (car: any) => {
  try {
    const { data } = await admin.post("/add-car", car);
    return data.success;
  } catch (error) {
    return false;
  }
};
