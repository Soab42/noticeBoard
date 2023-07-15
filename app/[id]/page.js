import LeftComponent from "@components/main/LeftComponent";
import RightBar from "@components/main/rightBar";
import React from "react";

export default function page() {
  return (
    <div className="flex justify-between h-full">
      <LeftComponent />
      <RightBar />
    </div>
  );
}
