import { admin } from "../../client";

export const getAllInstructorsAdmin = async () => {
  try {
    const { data } = await admin.get("/all-instructors");
    console.log(data);
    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};
export const getAllExpiredInstructors = async () => {
  try {
    const { data } = await admin.get("/expired-instructors");
    console.log(data);
    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};

export const adminEditInstructor = async (id: string, edits: any) => {
  try {
    const { data } = await admin.put(`instructor/${id}`, edits);
    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};

export const addInstructorAdmin = async (instructor: any) => {
  try {
    const { data } = await admin.post(`add-instructor`, instructor);
    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};
export const deleteInstructorAdmin = async (instructor: any) => {
  try {
    const { data } = await admin.delete(`instructor/${instructor}`);
    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};
