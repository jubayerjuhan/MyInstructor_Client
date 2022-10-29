import { client } from "../client";

export const getUserBookings = async () => {
  try {
    const { data } = await client.get("/bookings");
    return data.bookings;
  } catch (error) {
    console.log(error);
  }
};
