import { NextResponse } from "next/server";
import { getStorage } from "firebase-admin/storage";
import admin from "@firebase";

export async function GET(request) {
  const store = admin.storage().bucket();
  const url = request.url;
  const filenameRegex = /filename=([^&]+)/;
  const match = url.match(filenameRegex);
  if (match) {
    const filename = decodeURIComponent(match[1]).replace(/\+/g, " ");
    console.log(filename);
    const folderPath = "";
    const [files] = await store.getFiles({ prefix: folderPath });
    const fileNames = files.map((file) => file.name);

    const matchingData = fileNames.filter((file) => file.endsWith(filename));
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
}
