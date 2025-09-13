import { NextRequest } from "next/server";

type User = {
  id: string;
  name: string;
  email: string;
};

type ApiResponse = {
  data?: {
    user?: User;
  };
};


export async function middlewareAuth(req: NextRequest): Promise<User | undefined> {
  const accessToken = req.cookies.get("accessToken");
  const refreshToken = req.cookies.get("refreshToken");

  const option: RequestInit = {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}`,
    },
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`,
    option
  );

  const { data }: ApiResponse = await res.json();
  const { user } = data || {};

  return user;
}