import * as yup from "yup";

export const applyInstructorSchema = yup
  .object({
    firstName: yup.string().required("Field Required"),
    lastName: yup.string().required("Field Required"),
    email: yup
      .string()
      .email("Please Enter a Valid Email")
      .required("Field Required"),
    phone: yup
      .number()
      .typeError("Please Enter Number")
      .required("Field Required"),
    postCode: yup
      .number()
      .typeError("Please Enter Number")
      .required("Field Required"),
    message: yup.string(),
  })
  .required();
