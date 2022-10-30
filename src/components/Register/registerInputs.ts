export const licenseStatusOptions = [
  "I Don't Have A Learner Liscense",
  "I Have a Learner Card",
  "Yes, I Have License",
];

export const registerFields = [
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
    name: "password",
    label: "Password",
    placeholder: "Enter Password",
    type: "password",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "Phone Number",
    type: "tel",
  },
  {
    name: "licenseStatus",
    label: "Liscense Status",
    placeholder: "Licence Status",
    type: "select",
    options: licenseStatusOptions,
  },
  {
    name: "dateOfBirth",
    label: "Date Of Birth",
    placeholder: "Date Of Birth",
    type: "date",
  },
];
