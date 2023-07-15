import { NextResponse } from "next/server";
import { getStorage } from "firebase-admin/storage";
import admin from "@firebase";
export async function GET(request) {
  const store = admin.storage().bucket();
  // Specify the folder path
  const folderPath = "";

  // Get a list of all files in the bucket
  const [files] = await store.getFiles({ prefix: folderPath });

  // Extract the names of the files
  const fileNames = files.map((file) => file.name);

  return NextResponse.json(fileNames);
}
