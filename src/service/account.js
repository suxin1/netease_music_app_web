import request from "../app/config/request";

const PATH = {
  loginWithPhone: "/login/cellphone",
  loginWithEmail: "/login",
};

export function login(data) {
  return request.get("/login/cellphone", {
    params: data,
  });
}
