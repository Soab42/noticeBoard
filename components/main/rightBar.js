import Link from "next/link";
import React from "react";
import { BsBookmarkCheck, BsBookmarkHeart } from "react-icons/bs";
import { MdAppShortcut } from "react-icons/md";

export default function RightBar() {
  return (
    <div className="p-4 md:w-56 xl:w-64  shadow-md hidden xl:block items-center backdrop-blur-2xl gap-2 ">
      <p className="text-2xl flex text-center items-center gap-2 mb-3 justify-center text-[#23af84]">
        <MdAppShortcut /> Shortcut Guide
      </p>
      <div className="flex xl:flex-col md:flex-col gap-2  flex-wrap xl:flex-nowrap overflow-scroll h-[76vh] w-full">
        <Link
          href={"/branch/guide/achallan"}
          className="filter-btn text-start min-w-fit"
        >
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Auto Chalan System
        </Link>
        <Link
          href={"/branch/guide/rebate"}
          className="filter-btn text-start min-w-fit"
        >
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Rebate Posting
        </Link>
        <Link
          href={"/branch/guide/waiver"}
          className="filter-btn text-start min-w-fit"
        >
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Death Member Posting
        </Link>
        <Link
          href={"/branch/guide/budget"}
          className="filter-btn text-start min-w-fit"
        >
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Budget
        </Link>
        <Link
          href={"/branch/guide/postingcode"}
          className="filter-btn text-start min-w-fit"
        >
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Useful Posting Code
        </Link>
        <Link
          href={"/branch/guide/ledgercode"}
          className="filter-btn text-start min-w-fit"
        >
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          All Ledger Code
        </Link>
        <Link
          href={"/branch/guide/report_register"}
          className="filter-btn text-start min-w-fit"
        >
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Report & Register Code
        </Link>
        <Link
          href={"/branch/guide/aisreport"}
          className="filter-btn text-start min-w-fit"
        >
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          AIS Report File
        </Link>
        <Link
          href={"/branch/guide/mspinterest"}
          className="filter-btn text-start min-w-fit"
        >
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          MSP Interest Calculation
        </Link>
        <Link
          href={"/branch/guide/depreciation"}
          className="filter-btn text-start min-w-fit"
        >
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Depreciation Calculation
        </Link>
        <Link
          href={"/branch/guide/pf"}
          className="filter-btn text-start min-w-fit"
        >
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          PF Calculation
        </Link>
        <Link
          href={"/branch/guide/passbookcalculatin"}
          className="filter-btn text-start min-w-fit"
        >
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          PassBook Calculation
        </Link>
        <Link
          href={"/branch/guide/areasalary"}
          className="filter-btn text-start min-w-fit"
        >
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Area Salary Calculation
        </Link>
        <Link
          href={"/branch/guide/comingsoon"}
          className="filter-btn text-start min-w-fit"
        >
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Coming Soon
        </Link>
        <Link
          href={"/branch/guide/comingsoon"}
          className="filter-btn text-start min-w-fit"
        >
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Coming Soon
        </Link>
        <Link
          href={"/branch/guide/comingsoon"}
          className="filter-btn text-start min-w-fit"
        >
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Coming Soon
        </Link>
        <Link
          href={"/branch/guide/comingsoon"}
          className="filter-btn text-start min-w-fit"
        >
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Coming Soon
        </Link>
      </div>
    </div>
  );
}
