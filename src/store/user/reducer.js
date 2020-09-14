import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL} from "./action";
import {responseReducer} from "../reducers/response_comman";

export const auth = responseReducer(
  [LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL],
  {authenticated: false},
  (state, result) => {
    // 将用户数据缓存到LocalStorage
    const authenticated = Boolean(result.account && result.token);
    if (authenticated) {
      window.localStorage.setItem("account", result);
    }
    return {
      authenticated,
    }
  }
);
