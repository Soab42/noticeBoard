import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import * as jose from "jose";

export async function POST(request) {
  try {
    const body = {
      id: 1234,
      user: "saif",
    };

    // Create the JWT token
    const jwtToken = await new jose.SignJWT(body)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("30d")
      .sign(new TextEncoder().encode(process.env.ZWT_SECRET_KEY));

    cookies().set({
      name: "jwt",
      value: jwtToken,
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
      path: "/api", // Set the path where the cookie is accessible (api path)
      // secure: process.env.NODE_ENV === "production", // Only send the cookie over HTTPS in production
    });

    return NextResponse.json({
      jwtToken: jwtToken,
      message: "Upload complete",
    });
  } catch (error) {
    return NextResponse.json(
      { message: `Upload failed: ${error.message}` },
      { status: 500 }
    );
  }
}
