// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "apikey",
  authDomain: "authDomain",
  databaseURL: "databaseurl",
  projectId: "projectid",
  storageBucket: "storebucket",
  appId: "appid",

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const DB = getDatabase(app);
export const storage = getStorage();
