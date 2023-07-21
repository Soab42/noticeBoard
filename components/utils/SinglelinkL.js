import React from "react";

export default function SingleLinkLoader() {
  return (
    <div className="xl:w-1/2 w-full">
      <div className="w-full shadow-xl p-2 flex justify-between items-center  px-2 h-10 animate-pulse">
        <div className="bg-blue-700 opacity-20  h-3 w-1/2 rounded-full"></div>
        <div className="w-20 rounded-full opacity-20 bg-blue-700 h-3"></div>
      </div>
    </div>
  );
}
