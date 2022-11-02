import { Instructor } from "./instructorTypings";
import { User } from "./reduxTypings";

export interface BookingTypeBack {
  _id: string;
  user: User;
  instructor: Instructor;
  time: {
    from: string;
    to: string;
  };
  duration: number;
  pickupDetails: {
    address: string;
    suburb: string;
    postcode: number;
    state: string;
  };
  status: string;
  createdAt: Date;
}
