import Link from "next/link";
import React from "react";
import RightBar from "@components/main/rightBar";

export default function ReportLayout({ children }) {
  return (
    <div className="xl:flex  grid justify-between p-2 overflow-hidden gap-1 w-full">
      <div className="flex justify-between w-full flex-col xl:flex-row ">
        <div className="xl:w-64 w-36 bg-[#2ee38e] flex xl:flex-col p-2 gap-2">
          <Link href={"/branch/report/add"} className="btn">
            Add R/P Report
          </Link>
          <Link href={"/branch/report/show"} className="btn">
            R/P Report
          </Link>
          <Link href={"#"} className="btn">
            Walton Report
          </Link>
          <Link href={"#"} className="btn">
            Consumer Report
          </Link>
          <Link href={"#"} className="btn">
            Consumer Stock
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
