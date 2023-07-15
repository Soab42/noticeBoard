import Scroll from "@components/main/Scroll";
import React from "react";
import LeftBar from "@components/main/leftBar";
import RightBar from "@components/main/rightBar";
export default function page() {
  return (
    <div className="dashboard">
      <Scroll />
      <div className="main flex justify-between p-2 gap-1">
        <LeftBar />
        <RightBar />
      </div>
    </div>
  );
}
