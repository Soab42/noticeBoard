import React from "react";
import Format from "./Format";
import Regulation from "./Regulation";
import Catagories from "./Catagories";
import Search from "@components/utils/Search";
import Circular from "./circuler";
import Link from "next/link";

export default function leftBar() {
  return (
    <div className="grid grid-flow-row justify-between  gap-4  w-full h-1/2 xl:flex xl:flex-col xl:w-[85%]">
      <div className="flex w-full justify-between">
        <div className="w-[20%]">
          <Catagories />
        </div>
        <div className="flex flex-col gap-4  w-full">
          <Link href={"/search"}>
            <Search />
          </Link>
          <Circular />
        </div>
      </div>
      <div className=" xl:flex lg:flex  grid gap-4">
        <Format />
        <Regulation />
      </div>
    </div>
  );
}
