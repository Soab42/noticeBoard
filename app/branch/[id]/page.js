import LeftComponent from "@components/main/LeftComponent";

import RightBar from "@components/main/rightBar";

import React from "react";

export default function page() {
  return (
    <div className="xl:flex w-full grid justify-between p-2 xl:overflow-hidden gap-1">
      <LeftComponent />
      <div className="hidden xl:block">
        <RightBar />
      </div>
    </div>
  );
}
