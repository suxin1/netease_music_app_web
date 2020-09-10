import {request} from "../../utilities/http";


export async function login(username, password) {
  const response =await request.get("/login/cellphone", {
    params: {
      username,
      password,
    },
  });

  return response.json();
}
