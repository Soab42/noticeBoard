import admin from "firebase-admin";

try {
  admin.initializeApp({
    credential: admin.credential.cert(fireConfig),
    databaseURL: "https://health-3381c-default-rtdb.firebaseio.com",
    storageBucket: "health-3381c.appspot.com",
  });
  console.log("Initialized.");
} catch (error) {}

const storage = getStorage().bucket();
const Auth = admin.auth();
export { storage, Auth, admin as default };
