import React from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "@firebase2";
import { removeUser } from "@features/auth/authSlice";
export default function NavSm({ show, setShow }) {
  const dispatch = useDispatch();
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully.");
        //clear cookies from js cookies
        const cookies = Cookies.get();
        for (const cookieName in cookies) {
          Cookies.remove(cookieName);
        }
        dispatch(removeUser());
        router.push("/login");
      })
      .catch((error) => {
        console.error("An error occurred while signing out:", error.message);
        // Handle any errors that occur during the sign-out process
      });
  };
  return (
    <div
      className={`duration-500 absolute backdrop-blur-md grid gap-1  text-center p-2  top-10 text-sm w-56 ${
        !show ? "left-44" : "-left-20"
      }`}
    >
      <Link
        onClick={() => setShow(!show)}
        className={"navLink"}
        href={"/branch"}
      >
        Home
      </Link>
      <Link
        onClick={() => setShow(!show)}
        className={"navLink "}
        href={"/branch/circular"}
      >
        Circular
      </Link>
      <Link
        onClick={() => setShow(!show)}
        className={"navLink "}
        href={"/branch/regulation"}
      >
        Regulation
      </Link>
      <Link
        onClick={() => setShow(!show)}
        className={"navLink"}
        href={"/branch/format"}
      >
        Format
      </Link>
      <Link
        onClick={() => setShow(!show)}
        className={"navLink "}
        href={"/branch/report"}
      >
        Report
      </Link>
      <Link
        onClick={() => setShow(!show)}
        className={"navLink"}
        href={"/branch/job"}
      >
        Job
      </Link>
      <Link
        onClick={() => setShow(!show)}
        className={"navLink "}
        href={"/branch/others"}
      >
        Other
      </Link>
      <button className={"navLink "} onClick={logout}>
        Logout
      </button>
    </div>
  );
}
