"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function navbar() {
  const [show, setShow] = useState(false);
  const pathName = usePathname().slice(1);
  // console.log(pathName);

  return (
    <div className="dashboard  shadow-xl">
      {/* <div className=" h-full">
        <img
          src="assets/web.png"
          alt=""
          className="absolute w-screen h-full -z-10 "
        />
      </div> */}

      <div className="flex bg-transparent h-[4rem] shadow-xl p-5 justify-between items-center">
        <h1
          className={`logo capitalize font-bold text-[#23af84] text-3xl flex justify-between`}
        >
          <Link onClick={() => setShow(!show)} href={"/"}>
            Notice board
          </Link>
        </h1>
        <div className="relative xl:hidden">
          <div className="grid w-7 ml-24 gap-1 " onClick={() => setShow(!show)}>
            <div
              className={`h-1 w-full duration-500 bg-violet-500 ${
                show && "rotate-45 translate-y-2"
              }`}
            ></div>
            <div
              className={`h-1 w-full bg-violet-500 ${show && "hidden"}`}
            ></div>
            <div
              className={`h-1 w-full duration-700 bg-violet-500 ${
                show && "-rotate-45"
              }`}
            ></div>
          </div>
          {show && (
            <div className="duration-1000 absolute left-0 backdrop-blur-md grid gap-1 w-64 text-center p-2 z-10 top-12 text-xl text-[hsl(99,75%,60%)] ">
              <Link
                onClick={() => setShow(!show)}
                className={`hover:text-[#419eef] duration-200 bg-blue-950 xl:bg-transparent backdrop-blur-md hover:scale-90 text-sm p-1 border-blue-400 hover:font-bold  bg-[#28e0f12a] shadow-mds ${
                  pathName == "" && "text-[#419eef]"
                }`}
                href={"/"}
              >
                Home
              </Link>
              <Link
                onClick={() => setShow(!show)}
                className={`hover:text-[#419eef] duration-200 bg-blue-950 xl:bg-transparent backdrop-blur-md hover:scale-90 text-sm p-1 border-blue-400 hover:font-bold  bg-[#28e0f12a] shadow-md ${
                  pathName == "circuler" && "text-[#419eef]"
                }`}
                href={"circuler"}
              >
                {" "}
                Circuler
              </Link>
              <Link
                onClick={() => setShow(!show)}
                className={`hover:text-[#419eef]  bg-[#28e0f12a] shadow-md duration-200 bg-blue-950 xl:bg-transparent backdrop-blur-md hover:scale-90 text-sm p-1 border-blue-400 hover:font-bold ${
                  pathName === "regulation" && "text-[#419eef]"
                }`}
                href={"regulation"}
              >
                Regulation
              </Link>
              <Link
                onClick={() => setShow(!show)}
                className={`hover:text-[#419eef]  bg-[#28e0f12a] shadow-md duration-200 bg-blue-950 xl:bg-transparent backdrop-blur-md hover:scale-90 text-sm p-1 border-blue-400 hover:font-bold ${
                  pathName === "format" && "text-[#419eef]"
                }`}
                href={"format"}
              >
                Format
              </Link>
              <Link
                onClick={() => setShow(!show)}
                className={`hover:text-[#419eef]  bg-[#28e0f12a] shadow-md duration-200 bg-blue-950 xl:bg-transparent backdrop-blur-md hover:scale-90 text-sm p-1 border-blue-400 hover:font-bold ${
                  pathName === "report" && "text-[#419eef]"
                }`}
                href={"report"}
              >
                Report
              </Link>
              <Link
                onClick={() => setShow(!show)}
                className={`hover:text-[#419eef]  bg-[#28e0f12a] shadow-md duration-200 bg-blue-950 xl:bg-transparent backdrop-blur-md hover:scale-90 text-sm p-1 border-blue-400 hover:font-bold ${
                  pathName === "job" && "text-[#419eef]"
                }`}
                href={"job"}
              >
                Job
              </Link>
              <Link
                onClick={() => setShow(!show)}
                className={`hover:text-[#419eef]  bg-[#28e0f12a] shadow-md duration-200 bg-blue-950 xl:bg-transparent backdrop-blur-md hover:scale-90 text-sm p-1 border-blue-400 hover:font-bold ${
                  pathName === "others" && "text-[#419eef]"
                }`}
                href={"others"}
              >
                Other
              </Link>
            </div>
          )}
        </div>

        <div></div>

        <div className="xl:flex md:flex justify-between gap-32  hidden">
          <div className="flex gap-5 text-xl text-[#1a4b76]">
            <Link
              onClick={() => setShow(!show)}
              className={`hover:text-[#419eef] duration-200 bg-blue-950 xl:bg-transparent backdrop-blur-md hover:scale-90 hover:text-lg text-sm p-1 border-blue-400 hover:font-bold  ${
                pathName == "" && " text-[#419eef] text-lg font-bold"
              }`}
              href={"/"}
            >
              Home
            </Link>
            <Link
              onClick={() => setShow(!show)}
              className={`hover:text-[#419eef] duration-200 bg-blue-950 xl:bg-transparent backdrop-blur-md hover:scale-90 hover:text-lg text-sm p-1 border-blue-400 hover:font-bold ${
                pathName == "circuler" && "text-[#419eef] font-bold text-lg"
              }`}
              href={"circuler"}
            >
              {" "}
              Circuler
            </Link>
            <Link
              onClick={() => setShow(!show)}
              className={`hover:text-[#419eef] duration-200 bg-blue-950 xl:bg-transparent backdrop-blur-md hover:scale-90 hover:text-lg text-sm p-1 border-blue-400 hover:font-bold ${
                pathName === "regulation" && "text-[#419eef]"
              }`}
              href={"regulation"}
            >
              Regulation
            </Link>
            <Link
              onClick={() => setShow(!show)}
              className={`hover:text-[#419eef] duration-200 bg-blue-950 xl:bg-transparent backdrop-blur-md hover:scale-90 hover:text-lg text-sm p-1 border-blue-400 hover:font-bold ${
                pathName === "format" && "text-[#419eef]"
              }`}
              href={"format"}
            >
              Format
            </Link>
            <Link
              onClick={() => setShow(!show)}
              className={`hover:text-[#419eef] duration-200 bg-blue-950 xl:bg-transparent backdrop-blur-md hover:scale-90 hover:text-lg text-sm p-1 border-blue-400 hover:font-bold ${
                pathName === "report" && "text-[#419eef] text-lg scale-120"
              }`}
              href={"report"}
            >
              Report
            </Link>
            <Link
              onClick={() => setShow(!show)}
              className={`hover:text-[#419eef] duration-200 bg-blue-950 xl:bg-transparent backdrop-blur-md hover:scale-90 hover:text-lg text-sm p-1 border-blue-400 hover:font-bold ${
                pathName === "job" && "text-[#419eef]"
              }`}
              href={"job"}
            >
              Job
            </Link>
            <Link
              onClick={() => setShow(!show)}
              className={`hover:text-[#419eef] duration-200 bg-blue-950 xl:bg-transparent backdrop-blur-md hover:scale-90 hover:text-lg text-sm p-1 border-blue-400 hover:font-bold ${
                pathName === "others" && "text-[#419eef] text-lg"
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
