import React from "react";

export default function rightBar() {
  return (
    <div className="p-4 md:w-56 xl:w-56 h-[40vh] shadow-md xl:grid md:grid hidden   items-center backdrop-blur-2xl gap-2 ">
      <p className="text-2xl text-center mb-2 text-[#23af84]">Quick links</p>
      <div className="flex xl:flex-col md:flex-col gap-2 flex-wrap">
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
