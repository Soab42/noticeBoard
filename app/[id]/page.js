import LeftComponent from "@components/main/LeftComponent";

import RightBar from "@components/main/rightBar";
import React from "react";

export default function page() {
  return (
    <div className="xl:grid-flow-col md:grid-flow-col grid justify-between p-2 gap-1">
      <LeftComponent />
      <RightBar />
    </div>
  );
}
