// import { NextResponse } from "next/server";
// import admin from "@./firebase";

// export async function POST(request) {
//   try {
//     // Assuming you have a "category" field in the request body
//     const requestBody = await request.json();
//     const category = requestBody.category;
//     const fileName = requestBody.name;

//     // Add the "category/" prefix to the filename
//     const fullFileName = `${category}/${fileName}`;

//     const firebaseDatabaseRef = admin.database().ref();
//     // Retrieve the current data array from Firebase
//     firebaseDatabaseRef
//       .child(`storage/${category}`)
//       .once("value")
//       .then((snapshot) => {
//         const dataArray = snapshot.val() || []; // If the "data" node doesn't exist, start with an empty array
//         dataArray.push(requestBody); // Add the new object to the array
//         // Save the updated data array back to Firebase
//         return firebaseDatabaseRef.child(`storage/${category}`).set(dataArray);
//       })
//       .then(() => {
//         console.log(
//           "New object added to the data array in Firebase Realtime Database."
//         );
//       })
//       .catch((error) => {
//         console.error("Error adding new object:", error);
//       });

//     return NextResponse.json({
//       ...requestBody,
//     });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.error("Internal server error", { status: 500 });
//   }
// }
import { NextResponse } from "next/server";
import admin from "@./firebase";

export async function POST(request) {
  try {
    // Assuming you have a "category" field in the request body
    const requestBody = await request.json();
    const category = requestBody.category;
    const fileName = requestBody.name;
    const fileId = generateUniqueId(); // Generate a unique ID for the file

    // Add the "category/" prefix and unique ID to the filename
    const fullFileName = `${category}/${fileId}_${fileName}`;

    const firebaseDatabaseRef = admin.database().ref();

    // Check if the file already exists in Firebase
    firebaseDatabaseRef
      .child(`storage/${category}`)
      .orderByChild("name")
      .equalTo(fileName)
      .once("value")
      .then((snapshot) => {
        if (snapshot.exists()) {
          // File with the same name already exists
          throw new Error("File already exists");
        } else {
          // Retrieve the current data array from Firebase
          return firebaseDatabaseRef.child(`storage/${category}`).once("value");
        }
      })
      .then((snapshot) => {
        const dataArray = snapshot.val() || []; // If the "data" node doesn't exist, start with an empty array
        const newData = { ...requestBody, id: fileId }; // Add the unique ID to the new object
        dataArray.push(newData); // Add the new object to the array

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
      id: fileId, // Include the unique ID in the response
    });
  } catch (error) {
    console.error(error);
    return NextResponse.error("Internal server error", { status: 500 });
  }
}

// Function to generate a unique ID (you can use any unique ID generation logic you prefer)
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9); // This generates a 9-character alphanumeric ID
}
