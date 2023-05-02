import { Action } from "../actions/actionTypings";
import { GET_REPORTS_ERROR, GET_REPORTS_PENDING, GET_REPORTS_SUCCESS } from "./reduxNamings";

const financialReportsReducer = (
  state = {
    loading: false,
    reports: [],
    totalAmount: 0,
  },
  action: Action
) => {
  switch (action.type) {
    case GET_REPORTS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_REPORTS_SUCCESS:
      return {
        ...state,
        loading: false,
        reports: action.payload,
        totalAmount: action.payload.totalAmount,
      };
    case GET_REPORTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default financialReportsReducer;
