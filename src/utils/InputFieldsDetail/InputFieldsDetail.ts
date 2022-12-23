import { getAllCars } from "../../api_calls/Admin/admin_car";
import {
  genders,
  transmission,
} from "../../components/Register/registerInputs";
import { AllLanguages } from "../../json_data/languages";

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

export const giftCardFields = [
  {
    name: "recieverMail",
    label: "Reciever Email",
    placeholder: "Reciever Email",
    type: "email",
  },
  {
    name: "amount",
    label: "Amount",
    placeholder: "Enter How Many Hour You Want To Give",
    type: "number",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Message",
    type: "text",
  },
];

export const applyInstructorFields = [
  {
    name: "firstName",
    label: "First Name",
    placeholder: "Enter Your First Name",
    type: "text",
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    placeholder: "Enter Your Last Name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter Your Best Email",
    type: "email",
    required: true,
  },

  {
    name: "phone",
    label: "Phone",
    placeholder: "Phone Your Number",
    type: "tel",
    required: true,
  },
  {
    name: "dateOfBirth",
    label: "Date Of Birth",
    placeholder: "Select Your Date Of Birth",
    type: "date",
    required: true,
  },

  {
    name: "serviceSuburbs",
    label: "Service Suburbs",
    placeholder: "Select Suburbs You Like To Cover",
    type: "autocomplete",
    options: [],
    required: true,
  },
  {
    name: "car",
    label: "Car",
    placeholder: "Let Us Know Your Car Name",
    type: "text",
    required: true,
  },
  {
    name: "drivingLicenseExpire",
    label: "Driving License Expire",
    placeholder: "When Your Driving Licnse Will Expire?",
    type: "date",
    required: true,
  },
  {
    name: "instructorLicenseExpire",
    label: "Instructor License Expire",
    placeholder: "When Your Instructor Licnse Will Expire?",
    type: "date",
    required: true,
  },
  {
    name: "childrenCheckLicenseExpire",
    label: "Children Check License Expire",
    placeholder: "When Your Children Check Licnse Will Expire?",
    type: "date",
    required: true,
  },
  {
    name: "languages",
    label: "Languages",
    placeholder: "Select Languages You Know",
    type: "autocomplete",
    options: AllLanguages,
    required: true,
  },
  {
    name: "gender",
    label: "Gender",
    placeholder: "Select Your Gender *",
    type: "select",
    options: ["Male", "Female"],
    required: true,
  },
  {
    name: "transmissionType",
    label: "Transmission Type",
    placeholder: "Select Your Transmission Type *",
    type: "select",
    options: ["Auto", "Manual"],
    required: true,
  },

  {
    name: "avater",
    label: "Photo",
    placeholder:
      "Please Select a Photo of You With Clear View Of Your Face. Preferred Size (400 X 400 px)",
    type: "file",
    required: true,
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
    name: "drivingLicenseExpire",
    label: "Driving License Expire",
    placeholder: "Driving License Expire",
    type: "date",
  },
  {
    name: "instructorLicenseExpire",
    label: "Instructor License Expire",
    placeholder: "Instructor License Expire",
    type: "date",
  },
  {
    name: "childrenCheckLicenseExpire",
    label: "Children Check License Expire",
    placeholder: "Children Check License Expire",
    type: "date",
  },
  {
    name: "avater",
    label: "Avater",
    placeholder: "Avater",
    type: "file",
  },
];
