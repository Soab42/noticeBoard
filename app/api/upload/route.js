// // import admin from "@firebase";
// // import { NextResponse } from "next/server";

// // export async function POST(request) {
// //   const store = admin.storage().bucket();
// //   const data = await request.formData();
// //   const file = data.get("file");
// //   // const bytes = await file.arrayBuffer();
// //   // const buffer = Buffer.from(bytes);
// //   console.log(file);
// //   // console.log(buffer);
// //   store
// //     .upload()
// //     .then(() => NextResponse.json({ massage: "upload complete" }))
// //     .catch((err) => `upload failed ${err.message}`);
// // }
// import { storage } from "../../../firebase";
// // import { getStorage } from "firebase-admin/storage";
// import { NextResponse } from "next/server";

// export async function POST(request) {
//   const data = await request.formData();
//   const file = data.get("file");
//   console.log(file);
//   // Set the destination path in Firebase Storage where the file will be uploaded
//   const destinationPath = `storage/s.jpg`;

//   // Upload the file to Firebase Storage
//   await storage.upload(file.tempFile, {
//     destination: destinationPath,
//     metadata: {
//       contentType: file.type,
//     },
//   });

//   return NextResponse.json({ message: "Upload complete" });
// }
import { getDownloadURL, uploadBytes } from "firebase/storage";
import { storage as DB } from "../../../firebase2";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.formData();
  const file = data.get("file");

  if (!file) {
    return NextResponse.json({ message: "No file provided" }, { status: 400 });
  }
  try {
    const dbRef = ref(DB, "others/a.jpg");

    // 'file' comes from the Blob or File API
    uploadBytes(dbRef, result).then(() => {
      getDownloadURL(dbRef).then((downloadURL) => {
        console.log(downloadURL);
      });
    });

    return NextResponse.json({ message: "Upload complete" });
  } catch (error) {
    return NextResponse.json(
      { message: `Upload failed: ${error.message}` },
      { status: 500 }
    );
  }
}
