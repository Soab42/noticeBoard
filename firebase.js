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
} catch (error) {}

const storage = getStorage().bucket();
export { storage, admin as default };
