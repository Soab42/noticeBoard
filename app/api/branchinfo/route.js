import admin, { Auth } from "@firebase";
import { removeDuplicates } from "@utils/removeDuplicate";
import { NextResponse } from "next/server";

// Get a reference to the Firebase Realtime Database

export async function GET(request) {
  const db = admin.database();
  const dataRef = db.ref("/branchInfo/branch");
  const snapshot = await dataRef.once("value");
  const data = Object.values(snapshot.val());
  // Function to check if a value is an array
  // console.log(data);

  const sortedData = removeDuplicates(data, "BranchCode");
  return NextResponse.json(sortedData);
}
