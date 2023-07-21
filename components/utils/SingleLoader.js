import React from "react";

export default function SingleLoader() {
  return (
    <div className="flex justify-between items-center xl:p-2 xl:px-4 p-1.5 backdrop-blur-sm bg-[rgba(60,158,111,0.2)] rounded-md xl:h-24 md:h-24 h-14 w-full animate-pulse">
      <div className="w-full grid xl:gap-2 xl:pr-16 pr-5">
        <p className="xl:text-xl bg-slate-600 rounded-full w-2/3 xl:h-4 h-2 pl-3 text-[#1c86d1]"></p>
        <div className="flex justify-between text-center items-center">
          <div className="tagList opacity-20">
            <p className="tag">&nbsp;</p>
            <p className="tag">&nbsp;</p>
            <p className="tag">&nbsp;</p>
          </div>
          <div className="flex w-1/4 rounded-full opacity-30 bg-[#1aad7ce1] text-xs h-2 xl:h-4"></div>
        </div>
      </div>
      <div className="flex items-center p-1 gap-4">
        <button
          type="submit"
          className="xl:px-7 px-1.5 xl:h-6 opacity-20 h-3 rounded xl:w-20 bg-[#1aad7ce1] w-10"
        ></button>
        <div className="w-44 rounded-md h-20 bg-[#0C3F60] hidden xl:block md:block">
          {/* FileViewer skeleton */}
        </div>
      </div>
    </div>
  );
}
