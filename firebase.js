import admin from "firebase-admin";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
try {
  admin.initializeApp({
    credential: admin.credential.cert(fireConfig),
    databaseURL: "https://health-3381c-default-rtdb.firebaseio.com",
    storageBucket: "health-3381c.appspot.com",
  });
  console.log("Initialized.");
} catch (error) {}

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const DB = getDatabase(app);
export const storage = getStorage();
