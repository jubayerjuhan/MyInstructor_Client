import { BillingInfo, Cart } from "./cartTypings";
import { Instructor } from "./instructorTypings";

export interface State {
  user: UserState;
  cart: {
    cart: Cart;
    billingInfo: BillingInfo;
  };
  instructor: {
    instructor: Instructor;
  };
  credit: CreditReducerTypes;
  booking: BookingReducerTypes;
}

export interface BookingReducerTypes {
  loading: boolean;
  success: boolean;
  error: string;
  booking: {
    duration: number;
    date: string;
    time: { startFrom: string; endTo: string };
  };
  pickupDetails: PickupDetails;
}

export interface PickupDetails {
  address: string;
  suburb: string;
  postCode: string;
  state: string;
}
export interface UserState {
  loading: boolean;
  error: string;
  user: User;
}

export interface CreditReducerTypes {
  loading: boolean;
  error: string;
  success: boolean;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  licenseStatus: string;
  credit: number;
  userType: string;
}
