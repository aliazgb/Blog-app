import http from "./httpService";

export async function signupApi(data) {
  return http.post("/user/signup", data).then(({ data }) => data.data);
}
export async function signinApi(data) {
  return http.post("/user/signin", data).then(({ data }) => data.data);
}

export async function getUserApi() {
  return http.get("/user/profile").then(({ data }) => data.data);
}
export async function getAllUsers(option) {
  return http.get("/user/list", option).then(({ data }) => data.data);
}
export function logoutApi() {
  return http.post(`/user/logout`);
}
