import {LOGIN_USER_SUCCESS} from "./action";

export const loginState = (state={}, action) => {
  if(action.type === LOGIN_USER_SUCCESS) {
    return {...state, ...(action.response.result)};
  }
  return state;
};
