import { client } from "../client";

export const getUserBookings = async () => {
  try {
    const { data } = await client.get("/bookings");
    return data.bookings;
  } catch (error) {
    console.log(error);
  }
};
export const findBooking = async (id: string) => {
  try {
    const { data } = await client.get(`/find-booking/${id}`);
    return data;
  } catch (error) {
    return {
      success: false,
      message: "Can't Get The Booking Info",
    };
  }
};

export const changeStatusOfBooking = async (status: string, id: string) => {
  try {
    const { data } = await client.put(`booking/change-status/${id}`, {
      status,
    });
    return data.success;
  } catch (error) {
    return false;
  }
};
