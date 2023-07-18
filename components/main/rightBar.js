import React from "react";

export default function rightBar() {
  return (
    <div className="p-4 h-[80vh] shadow-md flex flex-col items-center backdrop-blur-2xl gap-2 w-56 ">
      <p className="text-2xl text-[#23af84]">Quic links</p>
      <div className="flex flex-col gap-2">
        <button className="filter-btn">Office Circuler</button>
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
