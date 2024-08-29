import React from "react";
import Nav from "./_component/Nav";

export default function DmLayout({ children }) {
  return (
    <div className="flex flex-col text-white">
      <div className="text-3xl m-4 w-full bg-green-500/90 font-black p-4">
        DM Technology
      </div>
      <div className="flex">
        <div>
          <Nav />
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
