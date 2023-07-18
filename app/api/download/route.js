import { NextResponse } from "next/server";
import { getStorage } from "firebase-admin/storage";
import admin from "@firebase";
import { useRouter } from "next/navigation";
export async function GET(request) {
  const store = admin.storage().bucket();
  const url = request.url;
  const filenameRegex = /filename=([^&]+)/;
  const match = url.match(filenameRegex);
  if (match) {
    const filename = decodeURIComponent(match[1]).replace(/\+/g, " ");
    // console.log(filename);
    const [signedUrl] = await store.file(filename).getSignedUrl({
      action: "read",
      expires: Date.now() + 15 * 60 * 1000, // Expiration time (15 minutes from now)
    });
    return NextResponse.redirect(signedUrl);
  }
}
