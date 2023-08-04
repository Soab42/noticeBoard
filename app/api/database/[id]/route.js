import admin, { Auth } from "@firebase";
import { NextResponse } from "next/server";

// Get a reference to the Firebase Realtime Database

export async function GET(request) {
  const URL = request.url;
  const parts = URL.split("/");
  const lastPart = parts[parts.length - 1];
  const extractedWord = lastPart.split("?")[0];
  // console.log(extractedWord);
  const Authorization = request.headers.get("Authorization");
  const idToken = Authorization?.split(" ")[1];
  if (idToken) {
    const uid = (await Auth.verifyIdToken(idToken)).uid;
    console.log(uid);
    const db = admin.database();
    const dataRef = db.ref(`storage/${extractedWord}`);
    const snapshot = await dataRef.once("value");
    const data = snapshot.val();

    return NextResponse.json(data);
  }
  return NextResponse.json({ massage: "You are not authenticated" });
}
