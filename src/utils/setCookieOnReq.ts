import { AxiosRequestConfig } from "axios";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export function setCookieOnReq(cookies: ReadonlyRequestCookies): AxiosRequestConfig {
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");

  const option = {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}`,
    },
  };
  return option
}
