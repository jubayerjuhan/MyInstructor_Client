import * as yup from "yup";

export const billingInfoSchema = yup
  .object({
    name: yup.string().required("Field Required"),
    address: yup.string().required("Field Required"),
    suburb: yup.string().required("Field Required"),
    postCode: yup.string().required("Field Required"),
    state: yup.string().required("Field Required"),
  })
  .required();
