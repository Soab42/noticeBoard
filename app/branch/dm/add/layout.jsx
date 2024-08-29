import React from "react";
import Link from "next/link";
import Nav from "@app/branch/dm/add/_component/Nav";

export default function DmLayout({ children }) {
  return (
    <div className="flex flex-col text-white">
      <div className="text-2xl bg-green-500/90 font-black p-2 w-full">
        Add Voucher
      </div>
      <div>
        <div className={'flex'}>
          <Nav/>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
