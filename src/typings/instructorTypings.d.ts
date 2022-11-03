export interface Instructor {
  avater: string;
  car: Car;
  dateOfBirth: date;
  email: string;
  firstName: string;
  credit: number;
  gender: string;
  languages: string[];
  lastName: string;
  phone: string;
  bio: string;
  reviews: [];
  serviceSuburbs: {
    suburbs: Suburb[];
  };
  createdAt: Date;
  transmissionType: string;
  _id: string;
  reviews: Review[];
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

export type Review = {
  rating: number;
  message: string;
  user: string;
};
