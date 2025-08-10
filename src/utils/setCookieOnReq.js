export function setCookieOnReq(cookies) {
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
