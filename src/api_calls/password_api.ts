import { client } from "../client";

export const sendForgetPasswordReq = async (email: string) => {
  try {
    const { data } = await client.post(`/forgot-password/instructor`, {
      email,
    });

    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message || "Unknown Error",
    };
  }
};

export const sendPasswordResetReq = async (
  token: string,
  newPassword: string
) => {
  console.log(token);
  try {
    const { data } = await client.post(`/reset-password/instructor`, {
      token,
      newPassword,
    });

    return {
      success: data.success,
      message: "Password Reset Was Successfull",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message || "Unknown Error",
    };
  }
};
