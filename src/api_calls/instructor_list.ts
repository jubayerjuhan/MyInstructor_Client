import { client } from "../client";

export const searchInstructor = async (postCode: any, transmission: any) => {
  try {
    const { data } = await client.get(
      `/search-instructor/${postCode}/${transmission}`
    );
    return data.instructors;
  } catch (error) {
    console.log(error);
  }
};
