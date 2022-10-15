export interface Instructor {
  avater: string;
  car: Car;
  dateOfBirth: date;
  email: string;
  firstName: string;

  gender: string;

  languages: string[];

  lastName: string;

  phone: string;

  reviews: [];
  serviceSuburbs: {
    suburbs: Suburb[];
  };
  createdAt: Date;
  transmissionType: string;
  _id: string;
}

export type Suburb = {
  suburb: string;
  postcode: string;
  state: string;
  _id: string;
};
type Car = {
  name: string;
  numberPlate: string;
  transmissionType: string;
};
