"use client";
import Scroll from "@components/main/Scroll";
import React from "react";
import LeftBar from "@components/main/leftBar";
import RightBar from "@components/main/rightBar";
import { useGetStorageAllQuery } from "@features/storage/storeApi";
import { useAddDataMutation } from "@features/database/dbApi";

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
