import React from "react";

export default function Catagories() {
  return (
    <div className="p-4 h-[40vh] shadow-md flex flex-col items-center backdrop-blur-2xl gap-2 ">
      <h1 className="text-2xl text-[#23af84]">Catagories</h1>
      <div className="flex flex-col gap-2">
        <button className="filter-btn">Meeting Regulation</button>
        <button className="filter-btn">Format</button>
        <button className="filter-btn">Report</button>
        <button className="filter-btn">Others</button>
        <button className="filter-btn">coming Soon</button>
        <button className="filter-btn">Coming Soon</button>
      </div>
    </div>
  );
}
