import React from "react";

export default function BranchLoader() {
  return (
    <div className="w-1/3 bg-black/20 backdrop-blur-md p-2 gap-1 grow text-lg grid rounded-md h-48 animate-pulse">
      <div className="text-center text-xl font-bold text-green-400 bg-black/20 p-0.5 rounded-lg h-10"></div>

      <div className=" h-5 bg-black/40 rounded-full"> </div>
      <div className=" h-5 bg-black/40 rounded-full"></div>

      <div className="mt-2 rounded-lg text-orange-500 hover:text-orange-200 duration-300 bg-black/30 p-1 text-cente flex h-9 justify-center capitalize hover:bg-black/50 "></div>
    </div>
  );
}
