"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const pathName = usePathname().slice(1);

  return (
    <div className="flex flex-col gap-2 mx-4 my-4 w-full px-2">

      <Link
        className={`btn bg-green-400 ${
          pathName.includes("branch/dm/add") && "bg-lime-200"
        }`}
        href={"/branch/dm/add/recipt"}
      >
        Add Voucher
      </Link>
      <Link
        className={`btn bg-green-400 ${
          pathName.includes("branch/dm/voucher_list") && "bg-lime-200"
        }`}
        href={"/branch/dm/voucher_list"}
      >
        Voucher List
      </Link>
      <Link
        className={`btn bg-green-400 ${
          pathName.includes("branch/dm/recipt_payment") && "bg-lime-200"
        }`}
        href={"/branch/dm/recipt_payment"}
      >
        Recept Payment Report
      </Link>
      <Link
        className={`btn bg-green-400 ${
          pathName.includes("branch/dm/income_statement") && "bg-lime-200"
        }`}
        href={"/branch/dm/income_statement"}
      >
        Income Statement
      </Link>
      <Link
        className={`btn bg-green-400 ${
          pathName.includes("branch/dm/balancesheet") && "bg-lime-200"
        }`}
        href={"/branch/dm/balancesheet"}
      >
        Balance Sheet
      </Link>
    </div>
  );
}
