import { cookies } from "next/headers";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "nordic2024";
const ADMIN_SECRET = process.env.ADMIN_SECRET || "default-secret-change-me";
const COOKIE_NAME = "admin_session";

async function generateToken(): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(ADMIN_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(ADMIN_USERNAME + ADMIN_PASSWORD)
  );
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function verifyCredentials(username: string, password: string): boolean {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

export async function createSession(): Promise<string> {
  return generateToken();
}

export async function getValidToken(): Promise<string> {
  return generateToken();
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(COOKIE_NAME);
  if (!session) return false;
  const validToken = await getValidToken();
  return session.value === validToken;
}

export function getSessionCookieName(): string {
  return COOKIE_NAME;
}
