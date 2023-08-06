import React from "react";
import Format from "./Format";
import Regulation from "./Regulation";
import Catagories from "./Website";
import Search from "@components/utils/Search";
import Circular from "./circular";
import Link from "next/link";

export default function leftBar() {
  return (
    <div className="flex flex-col justify-between  gap-4  w-full h-1/2 xl:flex xl:flex-col xl:w-[85%]">
      <div className="flex w-full justify-between">
        <div className="xl:w-[20%] min-w-fit xl:flex hidden">
          <Catagories />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Link href={"/branch/search"}>
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
