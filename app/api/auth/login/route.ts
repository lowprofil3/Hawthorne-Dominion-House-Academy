import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const TOKEN_COOKIE_NAME = "hdha_token";
const TOKEN_TTL = 60 * 60 * 24 * 7; // 7 days

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET environment variable is not set");
  }
  return secret;
}

function getManualAuthConfig() {
  const username = process.env.MANUAL_AUTH_USERNAME;
  const passwordHash = process.env.MANUAL_AUTH_PASSWORD_HASH;
  const displayName = process.env.MANUAL_AUTH_DISPLAY_NAME ?? "Academy Student";

  if (!username || !passwordHash) {
    throw new Error("Manual authentication environment variables are not fully configured");
  }

  return { username, passwordHash, displayName };
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
    const username = typeof body.username === "string" ? body.username.trim().toLowerCase() : "";
    const password = typeof body.password === "string" ? body.password : "";

    if (!username || !password) {
      return NextResponse.json({ error: "Username and password are required." }, { status: 400 });
    }

    const { username: expectedUsername, passwordHash, displayName } = getManualAuthConfig();

    if (username !== expectedUsername.toLowerCase()) {
      return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
    }

    const passwordMatches = await bcrypt.compare(password, passwordHash);
    if (!passwordMatches) {
      return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
    }

    const user = {
      id: "manual-student",
      email: `${expectedUsername}@hawthorne.local`,
      name: displayName,
    } as const;

    const token = createAuthToken({ sub: user.id, email: user.email, name: user.name });

    const response = NextResponse.json({ user });
    attachAuthCookie(response, token);
    return response;
  } catch (error) {
    console.error("Failed to login user", error);
    return NextResponse.json({ error: "Unable to login." }, { status: 500 });
  }
}
