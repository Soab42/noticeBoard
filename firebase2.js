// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAz4FftIn3J4IgGdtstP_eEJsVTDeOSIfE",
  authDomain: "health-3381c.firebaseapp.com",
  databaseURL: "https://health-3381c-default-rtdb.firebaseio.com",
  projectId: "health-3381c",
  storageBucket: "health-3381c.appspot.com",
  messagingSenderId: "700673056835",
  appId: "1:700673056835:web:f535147b0c9ab1617734f6",
  measurementId: "G-GTVSG72R2R",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const DB = getDatabase(app);
export const storage = getStorage(app);
