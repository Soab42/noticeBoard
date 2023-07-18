import React from "react";
import LeftBottom from "./LeftBottom";
import RightBottom from "./RightBottom";
import Catagories from "./Catagories";
import Search from "@components/utils/Search";
import Circular from "./circuler";

export default function leftBar() {
  return (
    <div className="flex justify-between  gap-4 flex-wrap w-full h-1/2">
      <Catagories />
      <div className="w-[84%] flex flex-col gap-4 p-2 backdrop-blur-lg ">
        <Search />
        <Circular />
      </div>
      <LeftBottom />
      <RightBottom />
    </div>
  );
}
