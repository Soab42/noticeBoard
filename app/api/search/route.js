import { NextResponse } from "next/server";
import admin from "firebase-admin";

export async function GET(request) {
  const store = admin.storage().bucket();
  const url = "Agriment(1).doc";
  console.log(url);
  const folderPath = "";
  const [files] = await store.getFiles({ prefix: folderPath });
  const fileNames = files.map((file) => file.name);

  const matchingData = fileNames.filter((fileName) => fileName.endsWith(url));
  console.log(matchingData);

  if (matchingData.length === 0) {
    console.log("No matching file found.");
    // Handle the case when no matching file is found, e.g., return an error response.
    return new NextResponse("File not found.", { status: 404 });
  }

  const fileName = matchingData[0]; // Get the first matching file name
  const [signedUrl] = await store.file(fileName).getSignedUrl({
    action: "read",
    expires: Date.now() + 15 * 60 * 1000, // Expiration time (15 minutes from now)
  });

  return NextResponse.redirect(signedUrl);
}
