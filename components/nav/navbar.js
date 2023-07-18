import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function navbar() {
  const pathName = usePathname().slice(1);
  // console.log(pathName);
  return (
    <div className="dashboard bg-transparent shadow-xl">
      <img
        src="assets/web.png"
        alt=""
        className="absolute w-screen h-screen -z-10"
      />
      <div className="flex bg-transparent h-[4rem] shadow-xl p-5 justify-center items-center">
        <h1 className="logo capitalize font-bold text-[#23af84] text-3xl flex-1">
          <Link href={"/"}>Notice board</Link>
        </h1>
        <div></div>
        <div className="flex justify-between gap-32">
          <div className="flex gap-5 text-xl text-[#1a4b76]">
            <Link
              className={`hover:text-[#419eef] duration-200 hover:font-bold ${
                pathName == "" && "text-[#419eef]"
              }`}
              href={"/"}
            >
              Home
            </Link>
            <Link
              className={`hover:text-[#419eef] duration-200 hover:font-bold ${
                pathName == "circuler" && "text-[#419eef]"
              }`}
              href={"circuler"}
            >
              {" "}
              Circuler
            </Link>
            <Link
              className={`hover:text-[#419eef] duration-200 hover:font-bold ${
                pathName === "regulation" && "text-[#419eef]"
              }`}
              href={"regulation"}
            >
              Regulation
            </Link>
            <Link
              className={`hover:text-[#419eef] duration-200 hover:font-bold ${
                pathName === "format" && "text-[#419eef]"
              }`}
              href={"format"}
            >
              Format
            </Link>
            <Link
              className={`hover:text-[#419eef] duration-200 hover:font-bold ${
                pathName === "report" && "text-[#419eef]"
              }`}
              href={"report"}
            >
              Report
            </Link>
            <Link
              className={`hover:text-[#419eef] duration-200 hover:font-bold ${
                pathName === "job" && "text-[#419eef]"
              }`}
              href={"job"}
            >
              Job
            </Link>
            <Link
              className={`hover:text-[#419eef] duration-200 hover:font-bold ${
                pathName === "others" && "text-[#419eef]"
              }`}
              href={"others"}
            >
              Other
            </Link>
          </div>
          <p className="uppercase text-xl text-[#23af84]">Saif</p>
        </div>
      </div>
    </div>
  );
}
