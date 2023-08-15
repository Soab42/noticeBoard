import React from "react";
import { BsBookmarkCheck, BsBookmarkHeart } from "react-icons/bs";
import { MdAppShortcut } from "react-icons/md";

export default function rightBar() {
  return (
    <div className="p-4 md:w-56 xl:w-64  shadow-md hidden xl:block items-center backdrop-blur-2xl gap-2 ">
      <p className="text-2xl flex text-center items-center gap-2 mb-3 justify-center text-[#23af84]">
        <MdAppShortcut /> Shortcut Guide
      </p>
      <div className="flex xl:flex-col md:flex-col gap-2  flex-wrap xl:flex-nowrap overflow-scroll h-[76vh] w-full">
        <button className="filter-btn text-start min-w-fit">
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Rebate Posting
        </button>
        <button className="filter-btn text-start min-w-fit">
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Death Member Posting
        </button>
        <button className="filter-btn text-start min-w-fit">
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Budget
        </button>
        <button className="filter-btn text-start min-w-fit">
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Useful Posting Code
        </button>
        <button className="filter-btn text-start min-w-fit">
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          All Ledger Code
        </button>
        <button className="filter-btn text-start min-w-fit">
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Report & Register Code
        </button>
        <button className="filter-btn text-start min-w-fit">
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          AIS Report File
        </button>
        <button className="filter-btn text-start min-w-fit">
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          MSP Interest Calculation
        </button>
        <button className="filter-btn text-start min-w-fit">
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Depreciation Calculation
        </button>
        <button className="filter-btn text-start min-w-fit">
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          PF Calculation
        </button>
        <button className="filter-btn text-start min-w-fit">
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          PassBook Calculation
        </button>
        <button className="filter-btn text-start min-w-fit">
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Coming Soon
        </button>
        <button className="filter-btn text-start min-w-fit">
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Coming Soon
        </button>
        <button className="filter-btn text-start min-w-fit">
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Coming Soon
        </button>
        <button className="filter-btn text-start min-w-fit">
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Coming Soon
        </button>
        <button className="filter-btn text-start min-w-fit">
          {" "}
          <div className="text-green-600">
            <BsBookmarkHeart />
          </div>
          Coming Soon
        </button>
      </div>
    </div>
  );
}
