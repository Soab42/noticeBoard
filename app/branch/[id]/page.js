import LeftComponent from "@components/main/LeftComponent";

import RightBar from "@components/main/rightBar";

import React from "react";

export default function page() {
  return (
    <div className="xl:flex  grid justify-between p-2 h-[87vh] overflow-scroll gap-1">
      <LeftComponent />
      <RightBar />
    </div>
  );
}
