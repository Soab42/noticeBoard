import React from "react";

export default function VideoLoader() {
  return (
    <div className=" aspect-video  shadow rounded-md w-full absolute ">
      <div className=" flex  justify-center items-center space-x-2 h-[80%]">
        <p className="animate-pulse delay-1500 text-[10rem]">.</p>
        <p className="animate-pulse delay-1000 text-[10rem]">.</p>
        <p className="animate-pulse delay-500 text-[10rem]">.</p>
      </div>
    </div>
  );
}
