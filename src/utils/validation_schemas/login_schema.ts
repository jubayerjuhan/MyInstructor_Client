import * as yup from "yup";

export const loginValidationSchema = yup
  .object({
    email: yup.string().required("Field Required"),
    password: yup.string().required("Field Required"),
  })
  .required();
export const registerValidationSchema = yup
  .object({
    firstName: yup.string().required("Field Required"),
    lastName: yup.string().required("Field Required"),
    email: yup.string().required("Field Required"),
    phone: yup
      .number()
      .typeError("Please Specify a Valid Number")
      .required("Field Required"),
    dateOfBirth: yup.string().required("Field Required"),
    licenseStatus: yup.string().required("Field Required"),
    password: yup.string().required("Field Required"),
  })
  .required();
