
import admin from "../../../firebase";

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  const { email, password } = body;
  try {
    let user;
    //get user by email
    // await admin
    //   .auth()
    //   .getUserByEmail(email)
    //   .then((userData) => (user = userData));
    //get user by email
    await admin
      .auth()
      .listUsers()
      .then((userData) => (user = userData));

    return new Response(
      JSON.stringify({ message: "Sign-in successful.", user: user }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Sign-in failed." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  // try {
  //   const jwtToken = await new jose.SignJWT(username)
  //     .setProtectedHeader({ alg: "HS256" })
  //     .setIssuedAt()
  //     .setExpirationTime("30d")
  //     .sign(new TextEncoder().encode(process.env.ZWT_SECRET_KEY));
  //   const serialized = serialize("jwt", jwtToken, {
  //     httpOnly: true,
  //     secure: process.env.NODE_ENV === "production",
  //     sameSite: "strict",
  //     maxAge: MAX_AGE,
  //     path: "/",
  //   });
  //   return new Response(JSON.stringify({ message: "login success" }), {
  //     status: 200,
  //     headers: { Cookie: serialized },
  //   });
  // } catch (error) {}
}

// try {
//   // Create the JWT token
//   const jwtToken = await new jose.SignJWT(request.body)
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt()
//     .setExpirationTime("30d")
//     .sign(new TextEncoder().encode(process.env.ZWT_SECRET_KEY));

//   cookies().set({
//     name: "jwt",
//     value: jwtToken,
//     httpOnly: true,
//     maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
//     path: "/api", // Set the path where the cookie is accessible (api path)
//     // secure: process.env.NODE_ENV === "production", // Only send the cookie over HTTPS in production
//   });

//   return NextResponse.json({
//     jwtToken: jwtToken,
//     message: "login successful",
//   });
// } catch (error) {
//   return NextResponse.json(
//     { message: `login failed: ${error.message}` },
//     { status: 500 }
//   );
// }
