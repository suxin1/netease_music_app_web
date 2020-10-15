import { CALL_API_KEY } from "../middleware/api";
import { userSchemas } from "./schema";

export const LOGIN_USER_REQUEST = Symbol("LOGIN_USER_REQUEST");
export const LOGIN_USER_SUCCESS = Symbol("LOGIN_USER_SUCCESS");
export const LOGIN_USER_FAIL = Symbol("LOGIN_USER_FAIL");

export const login = (params) => ({
  [CALL_API_KEY]: {
    types: [LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL],
    endpoint: "/login/cellphone",
    schema: userSchemas.LOGIN,
    params: params,
    method: "GET",
  },
});
