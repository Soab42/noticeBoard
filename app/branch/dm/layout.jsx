import React from "react";
import Nav from "./_component/Nav";
import Day from "@app/branch/dm/_component/Day";
import {getBaseUrl} from "@features/api/apiSlice";


export default async function DmLayout({ children }) {
    const day = await fetch(`${getBaseUrl()}/dm`);
    const dayData = await day.json(); // Assuming the API returns JSON data

  return (
    <div className="flex flex-col text-white">
      <div className="flex justify-between mx-20 text-2xl   font-black p-1 text-center">
          <h1>DM Technology</h1>
          <Day data={dayData}/>
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
