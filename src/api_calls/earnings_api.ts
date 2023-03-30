import { Earning } from "../components/Earnings/earningsTypes";
import { client } from "../client";

/**
Retrieves all earnings for a given instructor from the server.
@async
@function getAllEarnings
@param {string} instructorId - The ID of the instructor whose earnings to retrieve.
@returns {Promise<InstructorSuccessEarnings>} A Promise that resolves to an object containing a boolean indicating the success status, and either an array of earnings objects or an error message.
@throws {Error<Object>} If the request to the server fails.
*/

export interface InstructorEarningsReturn {
  success: boolean;
  earnings?: Earning[];
  error?: string;
}

export const getInstructorEarnings = async (instructorId: string) => {
  try {
    const { data } = await client.get(`earning/${instructorId}`);
    return {
      success: true,
      earnings: data?.earnings,
    };
  } catch (error) {
    return {
      success: true,
      error: "Can't Get The Earnings",
    };
  }
};
