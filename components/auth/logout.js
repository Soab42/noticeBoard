"use client";
import { removeUser } from "@features/auth/authSlice";
import { auth } from "@firebase2";
import { signOut } from "firebase/auth";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";

export default function Logout() {
  const dispatch = useDispatch();
  signOut(auth)
    .then(() => {
      console.log("User signed out successfully.");
      // Perform any additional actions after the user is signed out if needed
      //clear cookies from js cookies
      const cookies = Cookies.get();
      for (const cookieName in cookies) {
        Cookies.remove(cookieName);
      }
    })
    .catch((error) => {
      console.error("An error occurred while signing out:", error.message);
      // Handle any errors that occur during the sign-out process
    });
  dispatch(removeUser());
}
