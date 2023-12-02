import Particulars from "@components/main/depriciation/Particulars";
import React from "react";

export default function page() {
  const assetsList = [
    "Building",
    // "Computer",
    // "Furniture & Fixture",
    // "Office Equipment & Electronics",
  ];
  return (
    <div className="">
      <title>Depreciation Calculation</title>
      <div className="h-10 uppercase rounded-b-full text-center  shadow-lg shadow-rose-700/60 text-sky-600 text-2xl">
        Fixed Assets Depreciation Calculation
      </div>

      <main className="flex flex-col gap-4 mt-5 p-4 text-justify h-[78vh] overflow-scroll pb-56">
        <table className="depreciation border-collapse ">
          <thead className="tableRow bg-green-400/60 text-black">
            <th className="th">Particular</th>
            <th className="th">Additional</th>
            <th className="th">Balance</th>
            <th className="th">Write down value</th>
            <th className="th">Depreciation This Year</th>
            <th className="th">Cumulative Depreciation</th>
            <th className="th">Book value</th>
          </thead>
          <tbody>
            {assetsList.map((asset) => (
              <Particulars name={asset} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
