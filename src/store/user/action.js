export const LOGIN_USER = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

export function loginUser() {
  return {
    type: LOGIN_USER
  }
}

export function loginUserSuccess(user) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  }
}

export function loginUserFail(response) {
  return {
    type: LOGIN_USER_FAIL,
    message: response.message,
    code: response.code,
  }
}

export function login(data) {
  return async (dispatch, getState) => {

  }
}
