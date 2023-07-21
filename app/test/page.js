import Catagories from "@components/main/Catagories";
import React from "react";
import RightBar from "@components/main/rightBar";
import LeftComponent from "@components/main/LeftComponent";
import SingleLoader from "@components/utils/SingleLoader";
import Search from "@components/utils/Search";
export default function page() {
  return (
    <div className="main flex h-screen w-screen bg-slate-700">
      <div className="left flex  w-[85%]">
        <div className="catagory w-[20%] ring-red-300  h-full">
          <Catagories />
        </div>
        <div className="mainContent w-[80%]  ring-pink-400 h-full gap-2 flex flex-col">
          {/* <Search /> */}
          <SingleLoader />
          <SingleLoader />
          <SingleLoader />
          <SingleLoader />
        </div>
      </div>
      <div className="right  w-[15%]">
        <RightBar />
      </div>
    </div>
  );
}
