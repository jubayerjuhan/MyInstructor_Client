export interface Instructor {
  avater: string;
  car: Car;
  available: boolean;
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
  drivingLicenseExpire: string;
  instructorLicenseExpire?: string;
  instructorLicenseExpire?: string;
  childrenCheckLicenseExpire?: string;

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
  image: string;
  transmissionType?: string;
};

export type Review = {
  rating: number;
  message: string;
  user: string;
};
