import admin from "firebase-admin";
import { fireConfig } from "./fireConfig";
import { getStorage } from "firebase-admin/storage";

try {
  admin.initializeApp({
    credential: admin.credential.cert(fireConfig),
    databaseURL: "https://health-3381c-default-rtdb.firebaseio.com",
    storageBucket: "health-3381c.appspot.com",
  });

  console.log("Initialized.");
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    console.error("Firebase admin initialization error", error.stack);
  }
}
export const storage = getStorage().bucket();
export default admin;
