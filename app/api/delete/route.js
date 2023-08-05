import admin, { Auth } from "@firebase";
import { NextResponse } from "next/server";

// Get a reference to the Firebase Realtime Database
const db = admin.database();

export async function DELETE(request) {
  const requestBody = await request.json();
  const Authorization = request.headers.get("Authorization");
  const idToken = Authorization?.split(" ")[1];

  if (idToken) {
    try {
      // Verify the ID Token and get the user ID (uid)
      const { uid } = await Auth.verifyIdToken(idToken);
      console.log(uid);
      const refUrl = `storage/${requestBody.category}`;
      console.log(refUrl);
      // Fetch the entire data array from the database
      const dataRef = db.ref(refUrl);
      const snapshot = await dataRef.once("value");
      let dataArray = snapshot.val() || [];
      console.log(dataArray);
      const newDataArray = dataArray.filter(
        (data) => data.id !== requestBody.id
      );

      await dataRef.set(newDataArray);

      return NextResponse.json({ message: "Object deleted successfully" });
    } catch (error) {
      console.error("Error while deleting object:", error);
      return NextResponse.json({ message: "Error deleting object" }, 500);
    }
  }

  return NextResponse.json({ message: "You are not authenticated" }, 401);
}
