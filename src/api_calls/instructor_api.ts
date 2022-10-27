import { client } from "../client";

export const getInstructorBookings = async (id: string) => {
  try {
    const { data } = await client.get(`instructor-bookings?instructor=${id}`);
    return data.bookings;
  } catch (error) {
    console.log(error);
    return false;
  }
};
