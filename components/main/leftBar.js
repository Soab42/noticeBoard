import React from "react";
import LeftBottom from "./LeftBottom";
import RightBottom from "./RightBottom";
import Catagories from "./Catagories";
import Search from "@components/utils/Search";

export default function leftBar() {
  return (
    <div className="flex justify-between gap-4 flex-wrap w-full h-1/2 ">
      <Catagories />
      <div className="w-[84%] flex flex-col gap-4 p-2 backdrop-blur-lg ">
        <Search />
        <div className="shadow-lg backdrop-blur-2xl bg-[rgba(250,250,250,.05)] p-2 h-full flex flex-col gap-1 rounded-md">
          <p className="w-full text-center pl-4 text-xl border-b-2 border-[#23af84]  backdrop-blur-sm text-[#23af84] rounded-md p-1">
            Recently Added On Office Circular
          </p>
          <div className="flex flex-row flex-wrap gap-2 justify-around">
            <div className="shadow-md p-2 flex gap-1 hover:shadow-xl text-blue-600">
              <p>1.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing ebuttont.
                Dignissimos, ex!
              </p>
            </div>
            <div className="shadow-md p-2 flex gap-1 hover:shadow-xl text-blue-600">
              <p>2.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing ebuttont.
                Dignissimos, ex!
              </p>
            </div>
            <div className="shadow-md p-2 flex gap-1 hover:shadow-xl text-blue-600">
              <p>3.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing ebuttont.
                Dignissimos, ex!
              </p>
            </div>
            <div className="shadow-md p-2 flex gap-1 hover:shadow-xl text-blue-600">
              <p>3.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing ebuttont.
                Dignissimos, ex!
              </p>
            </div>
          </div>
        </div>
      </div>
      <LeftBottom />
      <RightBottom />
    </div>
  );
}
