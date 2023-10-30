"use client";
import React, { useEffect, useState } from "react";
import GuideMain from "@components/guide/main";
import GuideAddForm from "@components/guide/GuideAddForm";
import { useGetGuideAllQuery } from "@features/guide/guideApi";
export default function page() {
  const [addGuide, setAddGuide] = useState(false);
  const [selectGuide, setSelectGuide] = useState("");
  const { data, isLoading, isError, isSuccess } = useGetGuideAllQuery();

  useEffect(() => {}, []);
  // console.log(data);
  return (
    <div className="flex flex-col gap-2 w-full px-5 ">
      <div className="flex justify-between w-full items-center gap-4 p-2">
        <select
          name="guideSelected"
          id="guide"
          className="w-36 p-2 bg-sky-600/70"
          onChange={(e) => setSelectGuide(e.target.value)}
        >
          <option value="select">select Guide</option>
          {isSuccess &&
            Object.keys(data).map((key) => <option value={key}>{key}</option>)}
        </select>
        <div className="w-36 p-2 bg-green-600/70 flex justify-center relative">
          <button onClick={() => setAddGuide(!addGuide)}>Add New Guide</button>
          {addGuide && <GuideAddForm />}
        </div>
      </div>
      <div className="h-[80vh] overflow-scroll">
        {selectGuide && (
          <GuideMain data={data[selectGuide]} category={selectGuide} />
        )}
      </div>
    </div>
  );
}
