import admin, { Auth } from "@firebase";
import { NextResponse } from "next/server";

// Get a reference to the Firebase Realtime Database

export async function GET(request) {
  const db = admin.database();
  const dataRef = db.ref("test");
  const snapshot = await dataRef.once("value");
  const data = snapshot.val();
  // Function to check if a value is an array
  function isArray(value) {
    return Array.isArray(value);
  }

  // Combine all arrays from the original object into a new array
  const combinedArray =
    data &&
    Object?.values(data).reduce((result, value) => {
      return result?.concat(isArray(value) ? value : []);
    }, []);

  const sortedArray = combinedArray?.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return NextResponse.json(sortedArray);
}
