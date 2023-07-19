"use client";
import Scroll from "@components/main/Scroll";
import React from "react";
import LeftBar from "@components/main/leftBar";
import RightBar from "@components/main/rightBar";

export default function page() {
  return (
    <div className="dashboard">
      <Scroll />
      <div className="main xl:grid-flow-col md:grid-flow-col grid justify-between p-2 gap-1">
        <LeftBar />
        <RightBar />
      </div>
    </div>
  );
}
