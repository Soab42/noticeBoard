// "use client";
import React from "react";
import Link from "next/link";

export default function NavLg({ pathName }) {
  return (
    <div className="xl:flex justify-between gap-32  hidden">
      <div className="flex gap-2 text-xl text-[#1a4b76] h-8">
        <Link
          className={`navLinkLg border-b-0 duration-500  ${
            pathName == "" && "text-[#419eef] text-xl font-bold translate-y-1 "
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
            pathName === "job" &&
            "text-[#419eef] text-xl font-bold translate-y-1 "
          }`}
          href={"job"}
        >
          Job
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
      <p className="uppercase text-xl text-[#23af84]">Saif</p>
    </div>
  );
}
