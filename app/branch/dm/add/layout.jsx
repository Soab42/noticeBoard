import React from "react";
import Link from "next/link";
import Nav from "@app/branch/dm/add/_component/Nav";

export default function DmLayout({ children }) {
  return (
    <div className="flex flex-col text-white">
      <div>
        <div className={'flex'}>
          <Nav/>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
