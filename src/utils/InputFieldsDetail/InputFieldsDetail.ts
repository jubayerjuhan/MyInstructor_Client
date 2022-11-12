import { getAllCars } from "../../api_calls/Admin/admin_car";
import {
  genders,
  transmission,
} from "../../components/Register/registerInputs";

import languages from "../../json_data/languages.json";

export const carFields = [
  {
    name: "name",
    label: "Name",
    placeholder: "Car Name",
    type: "text",
  },
  {
    name: "avater",
    label: "Image",
    placeholder: "Car Image",
    type: "file",
  },
];

export const applyInstructorFields = [
  {
    name: "firstName",
    label: "First Name",
    placeholder: "First Name",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last Name",
    placeholder: "Last Name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter Email",
    type: "email",
  },

  {
    name: "phone",
    label: "Phone",
    placeholder: "Phone Number",
    type: "tel",
  },

  {
    name: "postCode",
    label: "Post Code",
    placeholder: "Post Code",
    type: "text",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Message",
    type: "textarea",
  },
];

export const addInstructorFields = [
  {
    name: "firstName",
    label: "First Name",
    placeholder: "First Name",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last Name",
    placeholder: "Last Name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Email",
    type: "email",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "Phone",
    type: "tel",
  },
  {
    name: "dateOfBirth",
    label: "Date Of Birth",
    placeholder: "Date Of Birth",
    type: "date",
  },
  {
    name: "gender",
    label: "Gender",
    placeholder: "Gender",
    type: "select",
    options: genders,
  },
  {
    name: "transmissionType",
    label: "Transmission Type",
    placeholder: "Transmission Type",
    type: "select",
    options: transmission,
  },
  {
    name: "languages",
    label: "Languages",
    placeholder: "Languages",
    type: "multiple",
    options: languages,
  },
  {
    name: "car",
    label: "Car",
    placeholder: "Car",
  },
  {
    name: "numberPlate",
    label: "Car Number (Number Plate)",
    placeholder: "Car Number",
    type: "text",
  },
  {
    name: "serviceSuburbs",
    label: "Service Suburb",
    placeholder: "Service Suburb",
    type: "multiple",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Password",
    type: "password",
  },
  {
    name: "avater",
    label: "Avater",
    placeholder: "Avater",
    type: "file",
  },
];
