import { client } from "../client";
import { User } from "../typings/reduxTypings";

export const getInstructorBookings = async (id: string) => {
  try {
    const { data } = await client.get(`instructor-bookings?instructor=${id}`);
    return data.bookings;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const editInstructor = async (user: User) => {
  try {
    const { data } = await client.put("/edit-instructor", user);
    return data.instructor;
  } catch (error) {
    return false;
  }
};

// update avater
export const instructorUpdateAvater = async (avater: any) => {
  try {
    const { data } = await client.put("/instructor/update-avater", avater);
    return data.instructor;
  } catch (error) {
    return false;
  }
};
