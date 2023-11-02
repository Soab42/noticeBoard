import admin, { Auth } from "@firebase";
import { NextResponse } from "next/server";

// Get a reference to the Firebase Realtime Database

export async function GET(request) {
  const URL = request.url;
  const parts = URL.split("/");
  const lastPart = parts[parts.length - 1];
  const extractedWord = lastPart.split("?")[0];
  // console.log(extractedWord);
  const db = admin.database();
  const dataRef = db.ref(`guide/${extractedWord}`);
  const snapshot = await dataRef.once("value");
  const data = snapshot.val();
  // console.log(data);
  return NextResponse.json(data);
}

export async function POST(request) {
  try {
    const URL = request.url;
    const parts = URL.split("/");
    const lastPart = parts[parts.length - 1];
    const extractedWord = lastPart.split("?")[0];
    // Assuming you have a "category" field in the request body
    const requestBody = await request.json();
    // console.log(request);
    const firebaseDatabaseRef = admin.database().ref();
    firebaseDatabaseRef.child(`guide/${extractedWord}`).push(requestBody);
    return NextResponse.json(requestBody);
  } catch (error) {
    console.error(error);
    return NextResponse.error("Internal server error", { status: 500 });
  }
}

export async function PATCH(request) {
  try {
    const URL = request.url;
    const parts = URL.split("/");

    const category = parts[parts.length - 2];
    const id = parts[parts.length - 1];
    // console.log(category, id);
    // Assuming you have a "category" field in the request body
    const requestBody = await request.json();
    // console.log(request);
    const firebaseDatabaseRef = admin.database().ref();
    firebaseDatabaseRef.child(`guide/${category}/${id}`).set(requestBody);
    return NextResponse.json(requestBody);
  } catch (error) {
    console.error(error);
    return NextResponse.error("Internal server error", { status: 500 });
  }
}
