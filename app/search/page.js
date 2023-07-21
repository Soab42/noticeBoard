import SearchComponent from "@components/main/SearchComponent";
import RightBar from "@components/main/rightBar";
import React from "react";

export default function page() {
  return (
    <div className="flex">
      <SearchComponent />
      <RightBar />
    </div>
  );
}
