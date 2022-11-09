import { admin } from "../../client";

export const getSingleUserAdmin = async (id: any) => {
  try {
    const { data } = await admin.get(`user/${id}`);
    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};
