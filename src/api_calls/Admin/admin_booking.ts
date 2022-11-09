import { admin } from "../../client";

export const getAllBookingsAdmin = async () => {
  try {
    const { data } = await admin.get("/all-bookings");
    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};
