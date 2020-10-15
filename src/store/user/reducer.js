import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from "./action";
import { responseReducer } from "../reducers/response_comman";

export const auth = responseReducer(
  [LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL],
  { authenticated: false, data: {} },
  (state, result) => {
    const authenticated = Boolean(result.account && result.token);
    return {
      authenticated,
    };
  }
);
