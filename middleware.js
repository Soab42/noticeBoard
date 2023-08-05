"use server";
import { NextResponse } from "next/server";
// import { auth } from "@firebase2";
// import { auth } from "@firebase";
export default async function middleware(req) {
  // Retrieve user's email from cookies
  const user = req.cookies.get("user")?.value;
  let isAdmin = null;
  if (user) {
    isAdmin = JSON.parse(user).isAdmin;
  }
  // console.log("middleware accessToken", req.headers.get("Authorization"));
  const url = req.nextUrl.origin;
  const pathName = req.nextUrl.pathname;
  const apiPath = pathName.startsWith("/api");
  const Authorization = req.headers.get("Authorization");
  const idToken = Authorization?.split(" ")[1];
  // if (pathName === "/login") {
  //   if (idToken) {
  //     return NextResponse.redirect(url);
  //   }
  //   return NextResponse.next();
  // }
  // For any other route and valid email, allow access
  return NextResponse.next();
}
