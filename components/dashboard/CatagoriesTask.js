import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsDatabase } from "react-icons/bs";
import { FaCodeBranch, FaHome } from "react-icons/fa";
import { FaRegCircleQuestion, FaUser } from "react-icons/fa6";
import {
  MdAnalytics,
  MdAppShortcut,
  MdAssignmentTurnedIn,
  MdRequestPage,
  MdRequestQuote,
  MdSpaceDashboard,
} from "react-icons/md";
import { SiAdminer } from "react-icons/si";

export default function CatagoriesTask() {
  const pathname = usePathname();

  // console.log(pathname.endsWith("database"));
  return (
    <nav className="sidebar-nav min-h-full  w-full px-4 gap-2 h-screen">
      <div className="flex items-center w-84 justify-start gap-2 ">
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/health-3381c.appspot.com/o/others%2Fpmklogo_2023-08-05?alt=media&token=cbd75af4-d719-4ac0-a439-32a5646d36e8"
            alt="logo"
            className="w-20"
          />
        </div>

        <div className="flex min-w-fit uppercase text-[1.6rem] font-extrabold text-orange-600">
          Admin panel
        </div>

        {/* <!-- End Logo --> */}
      </div>
      {/* Dashboard section */}
      <div className=" flex flex-col gap-1 font-semibold tracking-widest  p-1 h-[95vh]  py-12 bg-slate-100/10">
        <Link href={"/dashboard"}>
          <div
            className={`linkcss ${
              pathname.endsWith("dashboard") && "activeDashboard"
            }`}
          >
            <div className="flex items-center text-3xl text-yellow-200">
              <MdSpaceDashboard />
            </div>
            <div className="flex items-center">Dashboard</div>
          </div>
        </Link>

        {/* user section */}
        <Link href={"/dashboard/user"} className="relative">
          <div
            className={`linkcss ${
              pathname.startsWith("/dashboard/user") && "activeDashboard "
            }`}
          >
            <div className="flex text-[tomato] text-2xl items-center ">
              <FaUser />
            </div>
            <div className="flex items-center">User Section</div>
          </div>
        </Link>
        {/* user child section */}

        <div
          className={`childUser  flex-col relative overflow-hidden duration-500    ${
            pathname.startsWith("/dashboard/user") ? "h-36" : "h-0"
          }`}
        >
          {/* admin user section */}

          <Link href={"/dashboard/user/admin"} className="">
            <div
              className={`linkcss ${
                pathname.endsWith("user/admin") && "activeChild"
              }`}
            >
              <div className="flex text-[tomato] text-2xl items-center ">
                <MdAssignmentTurnedIn />
              </div>
              <div className="flex items-center">Admin User</div>
            </div>
          </Link>

          {/* Brach User Section */}

          <Link href={"/dashboard/user/branch"} className=" ">
            <div
              className={`linkcss ${
                pathname.endsWith("user/branch") && "activeChild"
              }`}
            >
              <div className="flex text-[tomato] text-2xl items-center ">
                <FaCodeBranch />
              </div>
              <div className="flex items-center">Branch User</div>
            </div>
          </Link>

          {/* User Registration Request Section */}

          <Link href={"/dashboard/user/request"} className="">
            <div
              className={`linkcss ${
                pathname.endsWith("user/request") && "activeChild"
              }`}
            >
              <div className="flex text-[tomato] text-2xl items-center ">
                <FaRegCircleQuestion />
              </div>
              <div className="flex items-center">Requested User</div>
            </div>
          </Link>
        </div>

        {/* Database Section */}
        <Link href={"/dashboard/database"}>
          <div
            className={`linkcss ${
              pathname.endsWith("database") && "activeDashboard"
            }`}
          >
            <div className="flex text-blue-500 text-3xl items-center ">
              <BsDatabase />
            </div>
            <div className="flex items-center">Database</div>
          </div>
        </Link>
        {/* Report Section */}

        <Link href={"/dashboard/report"}>
          <div
            className={`linkcss ${
              pathname.endsWith("report") && "activeDashboard"
            }`}
          >
            <div className="flex text-pink-400 text-3xl items-center ">
              <MdAnalytics />
            </div>
            <div className="flex items-center">Report</div>
          </div>
        </Link>
        {/* Branch Section */}
        <Link href={"/branch"}>
          <div
            className={`linkcss ${
              pathname.endsWith("/dashboard/branch") && "activeDashboard"
            }`}
          >
            <div className="flex text-green-400 text-3xl items-center ">
              <FaHome />
            </div>
            <div className="flex items-center">Branch</div>
          </div>
        </Link>
        <Link href={"/dashboard/guide"}>
          <div
            className={`linkcss ${
              pathname.endsWith("/dashboard/guide") && "activeDashboard"
            }`}
          >
            <div className="flex text-green-400 text-3xl items-center ">
              <MdAppShortcut />
            </div>
            <div className="flex items-center">Guide</div>
          </div>
        </Link>
      </div>
    </nav>
  );
}
