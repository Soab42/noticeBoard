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
import { storage } from "../../../firebase";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.formData();
  const file = data.get("file");
  const category = data.get("category");
  const fileName = data.get("name");

  if (!file) {
    return NextResponse.json({ message: "No file provided" }, { status: 400 });
  }

  // Create the destination path in Firebase Storage using the category and file name
  const destinationPath = `${file.name}`;
  console.log(file.name);
  try {
    // Upload the file to Firebase Storage
    await storage.upload(file.name, {
      destination: destinationPath,
      metadata: {
        contentType: file.type,
      },
    });
    // await storage.ref(destinationPath).put(file.tempFilePath, {
    //   contentType: file.type,
    // });

    return NextResponse.json({ message: "Upload complete" });
  } catch (error) {
    return NextResponse.json(
      { message: `Upload failed: ${error.message}` },
      { status: 500 }
    );
  }
}
