import * as jose from "jose";
import { NextResponse } from "next/server";

// export default async function middleware(req) {
//   // Check if the Authorization header exists
//   const authHeader = req.headers.get("Cookie");

//   if (!authHeader) {
//     return NextResponse.json(
//       { error: "Authorization failed!" },
//       { status: 401 }
//     );
//   }

//   if (req.nextUrl.pathname === "/api/upload") {
//     return NextResponse.next(); // Continue to the next handler in the chain
//   } else {
//     try {
//       const jwtToken = authHeader.split("=")[1]; // Extract JWT from the Authorization header
//       const { payload: jwtData } = await jose.jwtVerify(
//         jwtToken,
//         new TextEncoder().encode(process.env.ZWT_SECRET_KEY)
//       );
//       console.log(jwtData);
//       return NextResponse.next(); // Continue to the next handler in the chain
//     } catch (error) {
//       console.log(error);
//       return NextResponse.json(
//         { error: "JWT verification failed!" },
//         { status: 401 }
//       );
//     }
//   }
// }

export default async function middleware(req) {
  // Check if the request path starts with "/api/"
  if (req.nextUrl.pathname.startsWith("/api/")) {
    // Check if the Authorization header exists
    const authHeader = req.headers.get("Cookie");

    if (!authHeader) {
      return NextResponse.json(
        { error: "Authorization failed!" },
        { status: 401 }
      );
    }
    if (true) {
      return NextResponse.next(); // Continue to the next handler in the chain
    } else {
      try {
        const jwtToken = authHeader.split("=")[1]; // Extract JWT from the Authorization header
        const { payload: jwtData } = await jose.jwtVerify(
          jwtToken,
          new TextEncoder().encode(process.env.ZWT_SECRET_KEY)
        );
        console.log(jwtData);
        return NextResponse.next(); // Continue to the next handler in the chain
      } catch (error) {
        console.log(error);
        return NextResponse.json(
          { error: "JWT verification failed!" },
          { status: 401 }
        );
      }
    }
  } else {
    // If the request path doesn't start with "/api/", continue to the next handler in the chain
    return NextResponse.next();
  }
}
