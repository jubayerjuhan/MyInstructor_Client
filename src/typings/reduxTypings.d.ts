export interface State {
  user: UserState;
}

export interface UserState {
  loading: boolean;
  error: string;
  user: User;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  licenseStatus: string;
  credit: string;
  userType: string;
}
