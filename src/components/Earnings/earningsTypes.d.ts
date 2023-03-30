export interface InstructorEarningTableFields {
  fields: string[];
}

export interface Earning {
  _id: string;
  learner: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  instructor: string;
  duration: number;
  bookingAmount: number;
  instructorAmount: number;
  serviceCharge: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
