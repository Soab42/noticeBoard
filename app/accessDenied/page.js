import React from "react";

export default function page() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="w-[80vw] h-[80vh] flex flex-col justify-center items-center  text-3xl text-red-400 ring-8 ring-red-600 m-4 gap-10">
        <span className="z-10">
          You are Not Authorized to this page!. redirecting to.....
        </span>
        <a
          className="z-0 text-sky-500 text-[3rem] animate-bounce underline"
          href="/branch"
        >
          Branch Page
        </a>
      </div>
    </div>
  );
}
