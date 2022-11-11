import { admin } from "../../client";

export const getAppliedInstructors = async () => {
  try {
    const { data } = await admin.get(`/applied-instructors`);
    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};
