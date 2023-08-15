// "use server";
import { NextResponse } from "next/server";
// // import { auth } from "@firebase2";
// // import { auth } from "@firebase";
export default async function middleware(req) {
  //   // Retrieve user's email from cookies
  const user = req.cookies.get("user")?.value;
  let isAdmin = null;
  if (user) {
    isAdmin = JSON.parse(user).isAdmin;
  }
  //   // console.log("middleware accessToken", req.headers.get("Authorization"));
  const url = req.nextUrl.origin;
  const pathName = req.nextUrl.pathname;
  const apiPath = pathName.startsWith("/api");
  const Authorization = req.headers.get("Authorization");
  const idToken = Authorization?.split(" ")[1];
  if (apiPath) {
    if (user) {
      return NextResponse.next();
    }
    return NextResponse.json({ massage: "You are Not authenticated" });
  }

  if (pathName === "/login") {
    if (user) {
      if (isAdmin) {
        return NextResponse.redirect(url + "/dashboard");
      }
      return NextResponse.redirect(url + "/branch");
    }
    return NextResponse.next();
  }

  if (pathName.startsWith("/branch")) {
    if (!user) {
      return NextResponse.redirect(url + "/login");
    }
    return NextResponse.next();
  }
  if (pathName.startsWith("/dashboard")) {
    if (user && !isAdmin) {
      return NextResponse.rewrite(url + "/accessDenied");
    } else if (!user) {
      return NextResponse.redirect(url + "/login");
    }
    return NextResponse.next();
  }
  //   // For any other route and valid email, allow access
  return NextResponse.next();
}
