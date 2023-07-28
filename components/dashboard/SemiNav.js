"use client";
import React from "react";
import FilterData from "./FilterData";
import SortBy from "./SortBy";
import FormModal from "./FormModal";

export default function SemiNav() {
  return (
    <div className="flex justify-between p-2">
      <FilterData />
      <SortBy />
      <FormModal />
    </div>
  );
}
