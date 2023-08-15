"use client";
import React, { useState } from "react";

import { FaRegMessage, FaStaylinked, FaWallet } from "react-icons/fa6";

import { AiTwotoneSetting } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdLogOut } from "react-icons/io";
import { FaBell, FaCalendarDay, FaHome } from "react-icons/fa";
import {
  BsDashLg,
  BsFillMenuButtonFill,
  BsInbox,
  BsLink,
  BsPersonCircle,
  BsPersonX,
} from "react-icons/bs";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "@firebase2";
import { removeUser } from "@features/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdAdminPanelSettings } from "react-icons/md";

export default function TopNavAdmin() {
  const [showUser, setShowUser] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
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
    <div className="topBar ">
      <nav className="navbar flex justify-start h-12 text-sky-600">
        <div className="flex justify-between min-w-full  px-4">
          {/* <!-- toggle and nav items --> */}
          {/* left nav item */}
          <div className="flex items-center gap-5">
            {/*   Toggle menu  */}
            <div className="menuBar text-2xl">
              <BsFillMenuButtonFill />
            </div>
            {/* <!-- create new --> */}
            <div className="nav-item dropdown">
              {/* create new menu */}
              <div className="nav-link dropdown-toggle">
                <span className="flex justify-center gap-1 items-end text-black ">
                  Create New <IoMdArrowDropdown />
                </span>
              </div>
              {/* create new hide options */}
              <div className="hidden flex-col">
                <button>Action</button>
                <button>Another action</button>
                <hr className="dropdown-divider" />
                <button>Something else here</button>
              </div>
            </div>
          </div>

          {/* <!-- Right side toggle and nav items --> */}
          <div className="flex gap-4 float-end items-center">
            {/* <!-- Comment --> */}
            <div className="flex flex-col ">
              <div className="text-2xl">
                <FaBell />
              </div>
              <div className="dropdown-menu hidden flex-col">
                <div>Action</div>
                <div>Another action</div>
                <div>
                  <hr className="dropdown-divider" />
                </div>
                <div>Something else here</div>
              </div>
            </div>
            {/* <!-- End Comment --> */}
            {/* <!-- Messages --> */}
            <div className=" flex flex-col">
              <div className="text-2xl">
                <FaRegMessage />
              </div>

              <div>
                <div className="list-style-none">
                  <div>
                    <div className=" hidden flex-col gap-[1px]">
                      {/* <!-- Message --> */}

                      <div className="flex bg-gray-50 px-3 items-center p-1 gap-3">
                        <span className="rounded-full text-xs bg-pink-400 p-1.5">
                          <FaCalendarDay />
                        </span>
                        <div className=" flex flex-col justify-center">
                          <p className="text-md font-bold">Event today</p>
                          <p className="text-sm text-gray-400">
                            Just a reminder that event
                          </p>
                        </div>
                      </div>

                      {/* <!-- Message --> */}

                      <div className="flex bg-gray-50 px-3 items-center p-1 gap-3">
                        <span className="rounded-full bg-yellow-300 text-xs p-1.5">
                          <FaStaylinked />
                        </span>
                        <div className=" flex flex-col justify-center">
                          <p className="text-md font-bold">Settings</p>
                          <p className="text-sm text-gray-400">
                            You can customize this template
                          </p>
                        </div>
                      </div>

                      {/* <!-- Message --> */}

                      <div className="flex bg-gray-50 px-3 items-center p-1 gap-3">
                        <span className="rounded-full bg-yellow-300 text-xs p-1.5">
                          <BsPersonCircle />
                          <i className="mdi mdi-account fs-4"></i>
                        </span>
                        <div className="">
                          <p className="text-md font-bold">Pavan kumar</p>
                          <p className="text-sm text-gray-400">
                            Just see the my admin!
                          </p>
                        </div>
                      </div>
                      {/* <!-- Message --> */}

                      <div className="flex bg-gray-50 px-3 items-center p-1 gap-3">
                        <span className="rounded-full bg-yellow-300 text-xs p-1.5">
                          <BsLink />
                        </span>
                        <div>
                          <p className="text-md font-bold">Luanch Admin</p>
                          <p className="text-sm text-gray-400">
                            Just see the my new admin!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Messages --> */}

            {/* <!-- ============================================================== --> */}
            {/* <!-- User profile and search --> */}
            {/* <!-- ============================================================== --> */}
            <div
              className="nav-item dropdown relative z-10 text-black"
              onClick={() => setShowUser(!showUser)}
            >
              <button className="text-3xl flex items-center text-green-600 rounded-full p-0.5 hover:text-[tomato] duration-500 ">
                <MdAdminPanelSettings />
              </button>
              <div
                className={`flex flex-col backdrop-blur-md bg-[#2ce1657d] p-2 gap-2 text-sm absolute -right-3 w-36 rounded-md overflow-hidden duration-700 ${
                  showUser ? "w-36 " : "translate-x-44"
                }`}
              >
                <div className="flex items-center gap-2 hover:bg-orange-400 hover:text-yellow-100 p-1 cursor-pointer rounded-md px-2 shadow-md">
                  <BsPersonX />
                  My Profile
                </div>
                <div className="flex items-center gap-2 hover:bg-orange-400 hover:text-yellow-100 p-1 cursor-pointer rounded-md px-2 shadow-md">
                  <FaWallet />
                  My Balance
                </div>
                <div className="flex items-center gap-2 hover:bg-orange-400 hover:text-yellow-100 p-1 cursor-pointer rounded-md px-2 shadow-md">
                  <BsInbox />
                  Inbox
                </div>
                <div className="dropdown-divider"></div>
                <hr />
                <div className="flex items-center gap-2 hover:bg-orange-400 hover:text-yellow-100 p-1 cursor-pointer rounded-md px-2 shadow-md">
                  <AiTwotoneSetting /> Account Setting
                </div>
                <div className="dropdown-divider"></div>
                <hr />
                <div
                  className="flex items-center gap-2 hover:bg-orange-400 hover:text-yellow-100 p-1 cursor-pointer rounded-md px-2 shadow-md"
                  onClick={logout}
                >
                  <IoMdLogOut />
                  Logout
                </div>
                <div className="dropdown-divider"></div>
              </div>
            </div>
            {/* <!-- ============================================================== --> */}
            {/* <!-- User profile and search --> */}
            {/* <!-- ============================================================== --> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
