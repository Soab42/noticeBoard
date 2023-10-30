import admin, { Auth } from "@firebase";
import { NextResponse } from "next/server";

// Get a reference to the Firebase Realtime Database

export async function GET(request) {
  const db = admin.database();
  const dataRef = db.ref(`guide`);
  const snapshot = await dataRef.once("value");
  const data = snapshot.val();
  // console.log(data);
  return NextResponse.json(data);
}

export async function POST(request) {
  const newGuide = await request.json(); // Assuming new data is in newGuide
  const db = admin.database();
  const dataRef = db.ref(`guide`);

  // Retrieve existing data
  const snapshot = await dataRef.once("value");
  const existingData = snapshot.val();

  // Add the new data to the existing data
  const updatedData = {
    ...existingData,
    [newGuide.guideName]: { title: newGuide.title }, // Assuming newGuide contains the new data
  };

  // Update the data in the Firebase Realtime Database
  await dataRef.set(updatedData);
  return NextResponse.json(updatedData);
}
