import React from "react";

export default function SingleLoader() {
  return (
    <div className="flex justify-between items-center xl:p-2 xl:px-4 p-1.5 backdrop-blur-sm bg-[rgba(60,158,111,0.2)] rounded-md xl:h-24 md:h-24 h-14 w-full animate-pulse">
      <div className="w-full grid xl:gap-2 pr-16">
        <p className="xl:text-xl pl-3 text-[#1c86d1]">Loading...</p>
        <div className="flex justify-between text-center items-center">
          <div className="tagList">
            <p className="tag">&nbsp;</p>
            <p className="tag">&nbsp;</p>
            <p className="tag">&nbsp;</p>
          </div>
          <div className="flex text-[#1aad7ce1] text-xs">
            <div className="hidden xl:block">Published On:</div>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
      <div className="flex items-center p-1 gap-4">
        <button
          type="submit"
          className="xl:px-7 px-1.5 xl:h-8 h-5 rounded text-slate-600 text-xs xl:text-sm xl:font-semibold bg-[#1aad7ce1] hover:bg-[#2bd99fe1] hover:text-[#02200de1] shadow-md"
        >
          Loading...
        </button>
        <div className="w-44 rounded-md h-20 bg-[#0C3F60] hidden xl:block md:block">
          {/* FileViewer skeleton */}
        </div>
      </div>
    </div>
  );
}
