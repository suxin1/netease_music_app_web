import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL} from "./action";
import {responseReducer} from "../reducers/response_comman";

export const loginState = responseReducer([LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL]);
