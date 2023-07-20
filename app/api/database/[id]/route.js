import admin from "@firebase";
import { NextResponse } from "next/server";

// Get a reference to the Firebase Realtime Database

export async function GET(request) {
  const URL = request.url;
  const parts = URL.split("/");
  const lastPart = parts[parts.length - 1];
  const extractedWord = lastPart.split("?")[0];
  // console.log(extractedWord);
  const db = admin.database();
  const dataRef = db.ref(`storage/${extractedWord}`);
  const snapshot = await dataRef.once("value");
  const data = snapshot.val();

  return NextResponse.json(data);
}
