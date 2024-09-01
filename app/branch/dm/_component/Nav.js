"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const pathName = usePathname().slice(1);

  return (
    <div className="flex flex-col gap-2 mx-4 my-4 w-full px-2">
        <Link
            className={`btn  ${
                pathName== "branch/dm" ? "bg-green-400" : "bg-gray-400/20 text-white"
            }`}
            href={"/branch/dm"}
        >
            DashBoard
        </Link>
      <Link
        className={`btn  ${
          pathName.includes("branch/dm/add") ? "bg-green-400" : "bg-gray-400/20 text-white"
        }`}
        href={"/branch/dm/add/recipt"}
      >
        Add Voucher
      </Link>
      <Link
        className={`btn  ${
          pathName.includes("branch/dm/voucher_list") ? "bg-green-400" : "bg-gray-400/20 text-white"
        }`}
        href={"/branch/dm/voucher_list"}
      >
        Voucher List
      </Link>
        <Link
            className={`btn  ${
                pathName.includes("branch/dm/cashbook") ? "bg-green-400" : "bg-gray-400/20 text-white"
            }`}
            href={"/branch/dm/cashbook"}
        >
            Cash & Bank book
        </Link>
      <Link
        className={`btn  ${
          pathName.includes("branch/dm/recipt_payment") ? "bg-green-400" : "bg-gray-400/20 text-white"
        }`}
        href={"/branch/dm/recipt_payment"}
      >
        Recept Payment Report
      </Link>
      <Link
        className={`btn  ${
          pathName.includes("branch/dm/income_statement") ? "bg-green-400" : "bg-gray-400/20 text-white"
        }`}
        href={"/branch/dm/income_statement"}
      >
        Income Statement
      </Link>
      <Link
        className={`btn ${
          pathName.includes("branch/dm/balancesheet") ? "bg-green-400" : "bg-gray-400/20 text-white"
        }`}
        href={"/branch/dm/balancesheet"}
      >
        Balance Sheet
      </Link>
    </div>
  );
}
