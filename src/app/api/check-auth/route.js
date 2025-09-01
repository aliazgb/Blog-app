import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req) {
  const accessToken = req.cookies.get("accessToken")?.value;
  if (!accessToken) return NextResponse.json({ user: null });

  try {
    const user = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET_KEY);
    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ user: null });
  }
}
