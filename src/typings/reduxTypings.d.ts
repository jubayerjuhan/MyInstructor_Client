import { BookingTypeBack } from "./bookingsType";
import { BillingInfo, Cart } from "./cartTypings";
import { Instructor } from "./instructorTypings";

export interface State {
  user: UserState;
  admin: {
    admin: {
      _id: string;
      name: string;
      email: string;
    };
  };
  cart: {
    cart: Cart;
    billingInfo: BillingInfo;
  };
  instructor: {
    instructor: Instructor;
  };
  credit: CreditReducerTypes;
  booking: BookingReducerTypes;
  activeBooking: {
    booking: BookingTypeBack;
  };
  adminData: AdminDataReducerType;
}

export interface BookingReducerTypes {
  loading: boolean;
  success: boolean;
  error: string;
  booking: BookingType;
  pickupDetails: PickupDetails;
}

export interface BookingType {
  duration: number;
  date: string;
  type?: string;
  time: { startFrom?: string; endTo?: string; from?: string; to?: string };
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
  avater?: string;
  bio?: string;
  available?: boolean;
}

interface AdminDataReducerType {
  instructors: {
    loading: boolean;
    error: string;
    instructors: Instructor[];
    success: boolean;
  };
  users: {
    success: boolean;
    loading: boolean;
    error: string;
    users: User[];
  };
  bookings: {
    success: boolean;
    loading: boolean;
    error: string;
    bookings: BookingTypeBack[];
  };
}
