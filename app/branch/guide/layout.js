import Website from "@components/main/Website";
import RightBar from "@components/main/rightBar";
import React from "react";

export default function GuideLayout({ children }) {
  return (
    <div className="flex flex-col xl:flex-row justify-between pr-4 ">
      <div className="lg:min-w-[15%]">
        <Website />
      </div>
      <main className="text-blue-400/70 p-4 w-full text-center  grid gap-2">
        {children}
      </main>
      <div className="lg:min-w-[15%] p-1">
        <RightBar />
      </div>
    </div>
  );
}
