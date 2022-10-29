import { Instructor } from "./instructorTypings";

export interface BookingTypeBack {
  user: string;
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
