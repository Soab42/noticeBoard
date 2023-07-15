import Link from "next/link";
import React from "react";

export default function navbar() {
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
              className="hover:text-[#419eef] duration-200 hover:font-bold"
              href={"circuler"}
            >
              {" "}
              Circuler
            </Link>
            <Link
              className="hover:text-[#419eef] duration-200 hover:font-bold"
              href={"regulation"}
            >
              Regulation
            </Link>
            <Link
              className="hover:text-[#419eef] duration-200 hover:font-bold"
              href={"format"}
            >
              Format
            </Link>
            <Link
              className="hover:text-[#419eef] duration-200 hover:font-bold"
              href={"report"}
            >
              Report
            </Link>
            <Link
              className="hover:text-[#419eef] duration-200 hover:font-bold"
              href={"job"}
            >
              Job
            </Link>
            <Link
              className="hover:text-[#419eef] duration-200 hover:font-bold"
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
