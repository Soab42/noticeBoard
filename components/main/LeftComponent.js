import React from "react";
import LeftBar from "./leftBar";
import Catagories from "./Catagories";
import SingleFile from "./SingleFile";
import Search from "@components/utils/Search";
export default function LeftComponent() {
  return (
    <div class="flex justify-between w-full">
      <div className="w-64">
        <Catagories />
      </div>
      <div className="flex flex-col gap-2 p-2 w-full">
        <Search />
        <div className="flex flex-col gap-2 p-2 w-full">
          <SingleFile />
          <SingleFile />
          <SingleFile />
          <SingleFile />
        </div>
      </div>
    </div>
  );
}
