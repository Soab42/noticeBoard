import { NextResponse } from "next/server";
import admin from "@./firebase";

export async function POST(request) {
  try {
    // Assuming you have a "category" field in the request body
    const requestBody = await request.json();
    const category = requestBody.category;
    const fileName = requestBody.name;

    // Add the "category/" prefix to the filename
    const fullFileName = `${category}/${fileName}`;

    const firebaseDatabaseRef = admin.database().ref();
    // Retrieve the current data array from Firebase
    firebaseDatabaseRef
      .child(`storage/${category}`)
      .once("value")
      .then((snapshot) => {
        const dataArray = snapshot.val() || []; // If the "data" node doesn't exist, start with an empty array
        dataArray.push(requestBody); // Add the new object to the array
        // Save the updated data array back to Firebase
        return firebaseDatabaseRef.child(`storage/${category}`).set(dataArray);
      })
      .then(() => {
        console.log(
          "New object added to the data array in Firebase Realtime Database."
        );
      })
      .catch((error) => {
        console.error("Error adding new object:", error);
      });

    return NextResponse.json({
      ...requestBody,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.error("Internal server error", { status: 500 });
  }
}
