import React from "react";
import LeftBottom from "./LeftBottom";
import RightBottom from "./RightBottom";
import Catagories from "./Catagories";
import Search from "@components/utils/Search";
import Circular from "./circuler";

export default function leftBar() {
  return (
    <div className="grid grid-flow-row justify-between  gap-4  w-full h-1/2">
      <div className="xl:flex w-full lg:flex  grid">
        <Catagories />
        <div className="flex flex-col gap-4 p-2 backdrop-blur-lg ">
          <Search />
          <Circular />
        </div>
      </div>
      <div className=" xl:flex lg:flex  grid gap-4">
        <LeftBottom />
        <RightBottom />
      </div>
    </div>
  );
}
