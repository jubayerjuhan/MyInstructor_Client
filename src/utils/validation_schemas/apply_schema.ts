import * as yup from "yup";

export const applyInstructorSchema = yup
  .object({
    firstName: yup.string().required("Field Required"),
    lastName: yup.string().required("Field Required"),
    email: yup
      .string()
      .email("Please Enter a Valid Email")
      .required("Email Is Required"),
    phone: yup
      .number()
      .typeError("Please Enter Number. Ex: 0-9")
      .required("Phone Number Required"),
    address: yup.string().required("Address Is Required"),
    dateOfBirth: yup.string().required("Date Of Birth Is Required"),
    car: yup.string().required("Car Is Required"),
    childrenCheckLicenseExpire: yup
      .string()
      .required("Children Check License Expire Date Is Required"),
    drivingLicenseExpire: yup
      .string()
      .required("Driving License Expire Date Is Required"),
    instructorLicenseExpire: yup
      .string()
      .required("Instructor License Expire Date Is Required"),
    gender: yup.string().required("Gender Is Required"),
    languages: yup
      .mixed()
      .when("isArray", {
        is: Array.isArray,
        then: yup
          .array()
          .of(yup.string().typeError("Language Name Is Not String")),
        otherwise: yup.string().typeError("Language Is Required"),
      })
      .required("Language Is Required"),
    photo: yup.mixed().required("Photo Is Required"),
    serviceSuburbs: yup.mixed().when("isArray", {
      is: Array.isArray,
      then: yup
        .array()
        .of(yup.object().typeError("Service Subrubs Is Required")),
      otherwise: yup.object().typeError("Service Subrubs Is Required"),
    }),
    transmissionType: yup.string().required("Service Suburbs Is Required"),
  })
  .required();
