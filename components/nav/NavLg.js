// "use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavLg({ pathName }) {
  return (
    <div className="xl:flex justify-between gap-32  hidden">
      <div className="flex gap-5 text-xl text-[#1a4b76] h-8">
        <Link
          className={`navLinkLg border-b-0 duration-500  ${
            pathName == "" && "text-[#419eef] text-xl font-bold translate-y-1 "
          }`}
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={`navLinkLg ${
            pathName == "circuler" &&
            "text-[#419eef] text-xl font-bold translate-y-1 "
          }`}
          href={"circuler"}
        >
          {" "}
          Circuler
        </Link>
        <Link
          className={`navLinkLg ${
            pathName === "regulation" &&
            "text-[#419eef] text-xl font-bold translate-y-1 "
          }`}
          href={"regulation"}
        >
          Regulation
        </Link>
        <Link
          className={`navLinkLg ${
            pathName === "format" &&
            "text-[#419eef] text-xl font-bold translate-y-1 "
          }`}
          href={"format"}
        >
          Format
        </Link>
        <Link
          className={`navLinkLg ${
            pathName === "report" &&
            "text-[#419eef] text-xl font-bold translate-y-1 "
          }`}
          href={"report"}
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
          href={"others"}
        >
          Other
        </Link>
      </div>
      <p className="uppercase text-xl text-[#23af84]">Saif</p>
    </div>
  );
}
