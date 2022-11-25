import { Action } from "../actions/actionTypings";
import { SET_SUBURBS } from "./reduxNamings";

export const suburbReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case SET_SUBURBS:
      return {
        ...state,
        suburb: action.payload,
      };

    default:
      return state;
  }
};
