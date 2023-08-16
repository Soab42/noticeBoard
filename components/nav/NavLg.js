"use client";
import React, { useState } from "react";
import Link from "next/link";

import { AiOutlineDown, AiTwotoneSetting } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
import { BsInbox, BsPersonX } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "@firebase2";
import { removeUser } from "@features/auth/authSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function NavLg({ pathName }) {
  const currentUser = useSelector((state) => state.user);
  const [showUser, setShowUser] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  // console.log(currentUser);
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
    <div className="xl:flex md:flex justify-between md:gap-10 gap-32  hidden">
      <div className="flex md:gap-1 gap-2 text-xl md:text-lg text-[#1a4b76] h-8">
        <Link
          className={`navLinkLg border-b-0 duration-500  ${
            pathName == "/branch" &&
            "text-[#419eef] text-xl font-bold translate-y-1 "
          }`}
          href={"/branch"}
        >
          Home
        </Link>
        <Link
          className={`navLinkLg ${
            pathName == "circular" &&
            "text-[#419eef] text-xl font-bold translate-y-1 "
          }`}
          href={"/branch/circular"}
        >
          {" "}
          Circuler
        </Link>
        <Link
          className={`navLinkLg ${
            pathName === "regulation" &&
            "text-[#419eef] text-xl font-bold translate-y-1 "
          }`}
          href={"/branch/regulation"}
        >
          Regulation
        </Link>
        <Link
          className={`navLinkLg ${
            pathName === "format" &&
            "text-[#419eef] text-xl font-bold translate-y-1 "
          }`}
          href={"/branch/format"}
        >
          Format
        </Link>
        <Link
          className={`navLinkLg ${
            pathName === "report" &&
            "text-[#419eef] text-xl font-bold translate-y-1 "
          }`}
          href={"/branch/report"}
        >
          Report
        </Link>
        <Link
          className={`navLinkLg ${
            pathName === "branch/loan" &&
            "text-[#419eef] text-xl font-bold translate-y-1 "
          }`}
          href={"/branch/loan"}
        >
          Loan
        </Link>
        <Link
          className={`navLinkLg ${
            pathName === "others" &&
            "text-[#419eef] text-xl font-bold translate-y-1 "
          }`}
          href={"/branch/others"}
        >
          Other
        </Link>
      </div>
      <div
        className="flex items-end gap-1 uppercase text-xl text-[#23af84] hover:bg-[#39e0f932] px-2 p-1 cursor-pointer rounded-full relative"
        onClick={() => setShowUser(!showUser)}
      >
        <p>{currentUser && currentUser?.email.split("@")[0]}</p>
        <div className="animate-bounce hover:animate-none text-orange-400">
          <AiOutlineDown />
        </div>
        <div
          className={`flex flex-col backdrop-blur-md bg-[#2f449341] p-2 gap-2 text-sm absolute top-12 right-0  w-44 rounded-md overflow-hidden duration-700 ${
            showUser ? "w-36 " : "translate-x-56"
          }`}
        >
          <div className="flex items-center gap-2 hover:bg-orange-400 hover:text-yellow-100 p-1 cursor-pointer rounded-md px-2 duration-200">
            <BsPersonX />
            My Profile
          </div>

          <div className="flex items-center gap-2 hover:bg-orange-400 hover:text-yellow-100 p-1 cursor-pointer rounded-md px-2 duration-200">
            <BsInbox />
            Inbox
          </div>
          <div className="dropdown-divider"></div>
          <hr />
          <div className="flex items-center gap-2 hover:bg-orange-400 hover:text-yellow-100 p-1 cursor-pointer rounded-md px-2 duration-200">
            <AiTwotoneSetting /> Account Setting
          </div>
          <div className="dropdown-divider"></div>
          <hr />
          <div
            className="flex items-center gap-2 hover:bg-orange-400 hover:text-yellow-100 p-1 cursor-pointer rounded-md px-2 duration-200"
            onClick={logout}
          >
            <IoMdLogOut />
            Logout
          </div>
          <div className="dropdown-divider"></div>
        </div>
      </div>
    </div>
  );
}
