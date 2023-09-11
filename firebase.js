import admin from "firebase-admin";
import { fireConfig } from "./fireConfig";
import { getStorage } from "firebase-admin/storage";
try {
  admin.initializeApp({
    credential: admin.credential.cert(fireConfig),
    databaseURL: "https://databaselink.firebaseio.com",
    storageBucket: "storelink.appspot.com",
  });
  console.log("Initialized.");
} catch (error) {}

const storage = getStorage().bucket();
const Auth = admin.auth();
export { storage, Auth, admin as default };
