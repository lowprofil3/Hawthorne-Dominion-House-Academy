import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

import { kvGet } from "@/lib/kv";

const TOKEN_COOKIE_NAME = "hdha_token";
const TOKEN_TTL = 60 * 60 * 24 * 7; // 7 days

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET environment variable is not set");
  }
  return secret;
}

function createAuthToken(payload: { sub: string; email: string; name: string }) {
  return jwt.sign(payload, getJwtSecret(), { expiresIn: "7d" });
}

function attachAuthCookie(response: NextResponse, token: string) {
  response.cookies.set({
    name: TOKEN_COOKIE_NAME,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: TOKEN_TTL,
    path: "/",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const password = typeof body.password === "string" ? body.password : "";

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    const userId = await kvGet<string>(`user:email:${email}`);
    if (!userId) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const userRecord = await kvGet<{ id: string; email: string; passwordHash: string; name: string }>(`user:${userId}`);

    if (!userRecord) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const passwordMatches = await bcrypt.compare(password, userRecord.passwordHash);
    if (!passwordMatches) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const token = createAuthToken({ sub: userRecord.id, email: userRecord.email, name: userRecord.name });

    const response = NextResponse.json({ user: { id: userRecord.id, email: userRecord.email, name: userRecord.name } });
    attachAuthCookie(response, token);
    return response;
  } catch (error) {
    console.error("Failed to login user", error);
    return NextResponse.json({ error: "Unable to login." }, { status: 500 });
  }
}
