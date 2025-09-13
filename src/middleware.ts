import { middlewareAuth } from "@/utils/middlewareAuth";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest): Promise<Response | undefined> {
  const { pathname } = req.nextUrl;

  if (process.env.NEXT_PUBLIC_DISABLE_AUTH_MIDDLEWARE === "true") {
    return;
  }

  if (pathname.startsWith("/profile")) {
    const user = await middlewareAuth(req);
    if (!user) return NextResponse.redirect(new URL(`/signin`, req.nextUrl));
  }

  // if (pathname.startsWith("/signin")||pathname.startsWith("/signup")) {
  //   const user = await middlewareAuth(req);
  //   if (user) return NextResponse.redirect(new URL(`/`, req.nextUrl));
  // }
}

export const config = {
  matcher: ["/profile/:path*", "/signin", "/signup"],
};
