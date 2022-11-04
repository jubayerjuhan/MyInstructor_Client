import { Dispatch } from "redux";
import { client } from "../client";
import { Action } from "../redux/actions/actionTypings";
import {
  ADMIN_LOGIN_COMPLETE,
  ADMIN_LOGIN_ERROR,
  ADMIN_LOGIN_PENDING,
} from "../redux/reducer/reduxNamings";
import { storeAtLocalStorage } from "../utils/localstorage";

export const adminLogin = (cred: any) => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({ type: ADMIN_LOGIN_PENDING });

    const { data } = await client.post("/admin/login", cred);

    storeAtLocalStorage("adminJwtToken", data.jwtToken);
    dispatch({ type: ADMIN_LOGIN_COMPLETE, payload: data.user });
  } catch (error: any) {
    dispatch({
      type: ADMIN_LOGIN_ERROR,
      payload: error.response.data.message,
    });
  }
};
