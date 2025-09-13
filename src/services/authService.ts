import { SignupInput, SignupResponse, User } from "types/Signup";
import { AxiosRequestConfig } from "axios";
import http from "./httpService";

export async function signupApi(data: SignupInput): Promise<SignupResponse> {
  return http.post<{ data: SignupResponse }>("/user/signup", data).then(({ data }) => data.data);
}
export async function signinApi(data: SignupInput): Promise<SignupResponse> {
  return http.post<{ data: SignupResponse }>("/user/signin", data).then(({ data }) => data.data);
}

export async function getUserApi() {
  return http.get<{ data: SignupResponse }>("/user/profile").then(({ data }) => data.data);
}
export async function getAllUsers(option?: AxiosRequestConfig): Promise<{ users: User[] }> {
  return http.get("/user/list", option).then(({ data }) => data.data);
}
export function logoutApi(): Promise<{ message: string }> {
  return http.post(`/user/logout`);
}
