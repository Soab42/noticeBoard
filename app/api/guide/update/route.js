import admin, { Auth } from "@firebase";
import { NextResponse } from "next/server";

// Get a reference to the Firebase Realtime Database
const db = admin.database();

export async function PATCH(request) {
  const requestBody = await request.json();
  const Authorization = request.headers.get("Authorization");
  const idToken = Authorization?.split(" ")[1];
  if (idToken) {
    try {
      // Verify the ID Token and get the user ID (uid)
      const { uid } = await Auth.verifyIdToken(idToken);
      console.log(uid);
      const refUrl = `storage/${requestBody.category}`;
      // console.log(refUrl);

      // Fetch the entire data array from the database
      const dataRef = db.ref(refUrl);
      const snapshot = await dataRef.once("value");
      let dataArray = snapshot.val() || [];
      // console.log(dataArray);

      // Find the index of the object with the specified ID in the data array
      const dataIndex = dataArray.findIndex(
        (data) => data.id === requestBody.id
      );

      if (dataIndex !== -1) {
        // Update the data of the object at the specified index
        dataArray[dataIndex] = {
          ...dataArray[dataIndex], // Preserve existing properties
          // Update properties with new values
          tags: requestBody.tags,
        };

        // Update the data array in the database
        await dataRef.set(dataArray);

        return NextResponse.json({ message: "Object updated successfully" });
      } else {
        return NextResponse.json({ message: "Object not found" }, 404);
      }
    } catch (error) {
      console.error("Error while updating object:", error);
      return NextResponse.json({ message: "Error updating object" }, 500);
    }
  }

  return NextResponse.json({ message: "You are not authenticated" }, 401);
}
