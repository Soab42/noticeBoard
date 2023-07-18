import { NextResponse } from "next/server";
// import { getStorage } from "firebase-admin/storage";
import admin from "@firebase";
// import multer from "multer";

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

// export async function POST(request) {
//   const store = admin.storage().bucket();

//   // Get the file from the request body
//   const file = request.body.file;

//   // Specify the folder path where you want to upload the file
//   const folderPath = request.body.category;

//   // Set a unique name for the file (optional)
//   // const fileName = generateUniqueFileName(file.name);

//   // Set the path where the file will be stored in Firebase Storage
//   const filePath = `${folderPath}/${fileName}`;

//   // Create a reference to the file in Firebase Storage
//   const fileRef = store.file(filePath);

//   // Create a write stream to upload the file
//   const writeStream = fileRef.createWriteStream();

//   // Handle errors during the upload process
//   writeStream.on("error", (error) => {
//     console.error("Error uploading file:", error);
//     writeStream.end();
//     return NextResponse.error("Failed to upload file");
//   });

//   // Handle the completion of the upload process
//   writeStream.on("finish", () => {
//     console.log("File uploaded successfully");
//     writeStream.end();
//     return NextResponse.json({ message: "File uploaded successfully" });
//   });

//   // Pipe the file to the write stream to start the upload
//   file.pipe(writeStream);
// }
// pages/api/uploadFile.js

// Configure multer instance
