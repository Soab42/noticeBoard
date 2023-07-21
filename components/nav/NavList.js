import React from "react";
import Link from "next/link";
export default function NavList({ setShow, show, pathName }) {
  return (
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
  );
}
