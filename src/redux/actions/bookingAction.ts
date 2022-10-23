import { Dispatch } from "react";
import { client } from "../../client";
import {
  BOOKING_PENDING,
  CLEAR_ERROR,
  CLEAR_SUCCESS,
  PURCHASE_CREDIT_ERROR,
  PURCHASE_CREDIT_PENDING,
  PURCHASE_CREDIT_SUCCESS,
} from "../reducer/reduxNamings";
import { Action } from "./actionTypings";

export const bookLesson = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: BOOKING_PENDING });
  // const booking = await client;
};

export const clearError = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: CLEAR_ERROR });
};
export const clearSuccess = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: CLEAR_SUCCESS });
};

export const purchaseCredit =
  (hour: number) => async (dispatch: Dispatch<Action>) => {
    console.log(hour, "Booking Hour");
    try {
      dispatch({ type: PURCHASE_CREDIT_PENDING });

      const credit = await client.post("/add-credit", { hour });
      dispatch({ type: PURCHASE_CREDIT_SUCCESS });
    } catch (error: any) {
      dispatch({
        type: PURCHASE_CREDIT_ERROR,
        payload: error.response.data.message || error.message,
      });
    }
  };
