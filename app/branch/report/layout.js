"use client";
import Link from "next/link";
import React from "react";
import RightBar from "@components/main/rightBar";
import { usePathname } from "next/navigation";

export default function ReportLayout({ children }) {
  const pathname = usePathname();
  return (
    <div className="xl:flex  grid justify-between p-2 overflow-hidden gap-1 w-full">
      <div className="flex justify-between w-full flex-col xl:flex-row ">
        <div className="xl:w-64 w-36 bg-[#2ee38e] flex xl:flex-col p-2 gap-2">
          <Link
            href={"/branch/report/add"}
            className={`btn ${pathname.endsWith("add") && "activeDashboard"}`}
          >
            Add R/P Report
          </Link>
          <Link
            href={"/branch/report/show"}
            className={`btn ${pathname.endsWith("show") && "activeDashboard"}`}
          >
            R/P Report
          </Link>
        </div>
        <div className="report px-4 w-full  h-full p-2">{children}</div>
      </div>
      <div>
        <RightBar />
      </div>
    </div>
  );
}
