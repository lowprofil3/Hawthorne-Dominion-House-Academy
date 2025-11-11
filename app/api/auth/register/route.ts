import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

import { kvGet, kvSet } from "@/lib/kv";

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
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const password = typeof body.password === "string" ? body.password : "";

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Name, email, and password are required." }, { status: 400 });
    }

    const existingUserId = await kvGet<string>(`user:email:${email}`);
    if (existingUserId) {
      return NextResponse.json({ error: "An account with that email already exists." }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const id = crypto.randomUUID();

    const userRecord = { id, email, passwordHash, name };

    await kvSet(`user:${id}`, userRecord);
    await kvSet(`user:email:${email}`, id);

    const token = createAuthToken({ sub: id, email, name });

    const response = NextResponse.json({ user: { id, email, name } }, { status: 201 });
    attachAuthCookie(response, token);
    return response;
  } catch (error) {
    console.error("Failed to register user", error);
    return NextResponse.json({ error: "Unable to register user." }, { status: 500 });
  }
}
