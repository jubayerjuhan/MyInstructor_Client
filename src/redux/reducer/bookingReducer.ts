import { Action } from "../actions/actionTypings";
import {
  BOOKING_FAILED,
  BOOKING_PENDING,
  BOOKING_SUCCESS,
  CLEAR_ERROR,
  CLEAR_SUCCESS,
  PURCHASE_CREDIT_ERROR,
  PURCHASE_CREDIT_PENDING,
  PURCHASE_CREDIT_SUCCESS,
} from "./reduxNamings";

const initialState = {};

export const bookingReducer = (
  state = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case BOOKING_PENDING:
      return { ...state, loading: true };
    case BOOKING_SUCCESS:
      return { ...state, loading: false, success: true };
    case BOOKING_FAILED:
      return { ...state, loading: false, success: false, error: payload };
    default:
      return state;
  }
};

// purchase credit reducer
export const creditReducer = (
  state = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case PURCHASE_CREDIT_PENDING:
      return { ...state, loading: true };
    case PURCHASE_CREDIT_SUCCESS:
      return { ...state, loading: false, success: true };
    case PURCHASE_CREDIT_ERROR:
      return { ...state, loading: false, success: false, error: payload };
    case CLEAR_ERROR:
      return { ...state, error: null };
    case CLEAR_SUCCESS:
      return { ...state, success: null };
    default:
      return state;
  }
};
