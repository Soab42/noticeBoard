import React from "react";

import {} from "react-icons/ti";
import { FaRegMessage, FaStaylinked, FaWallet } from "react-icons/fa6";

import { AiTwotoneSetting } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdLogOut } from "react-icons/io";
import { FaBell, FaCalendarDay } from "react-icons/fa";
import {
  BsFillMenuButtonFill,
  BsInbox,
  BsLink,
  BsPersonCircle,
  BsPersonX,
} from "react-icons/bs";
export default function TopNavAdmin() {
  return (
    <div className="topBar ">
      <nav className="navbar flex justify-start  bg-[#83f7a4]  h-12 text-sky-600">
        <div className="flex  gap-6 items-center w-96 justify-start  bg-blue-950">
          {/* <!-- Logo --> */}
          <div className="flex gap-2 p-2 w-full ">
            <img src="images/logo-icon.png" alt="homepage" width="30" />

            <div className="flex min-w-fit uppercase text-2xl font-extrabold text-orange-600">
              Admin panel
            </div>
          </div>
          {/* <!-- End Logo --> */}
        </div>

        <div className="flex justify-between w-full px-4">
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
            <div className="nav-item dropdown">
              <button>
                <img
                  src="images/users/1.jpg"
                  className="rounded-full"
                  width="31"
                />
              </button>
              <div className="hidden flex-col bg-orange-50 p-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <BsPersonX />
                  My Profile
                </div>
                <div className="flex items-center gap-2">
                  <FaWallet />
                  My Balance
                </div>
                <div className="flex items-center gap-2">
                  <BsInbox />
                  Inbox
                </div>
                <div className="dropdown-divider"></div>
                <hr />
                <div className="flex items-center gap-2">
                  <AiTwotoneSetting /> Account Setting
                </div>
                <div className="dropdown-divider"></div>
                <hr />
                <div className="flex items-center gap-2 ">
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
