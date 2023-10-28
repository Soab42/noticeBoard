"use client";
import React, { useEffect, useState } from "react";
import GuideMain from "@components/guide/main";
export default function page() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectGuide, setSelectGuide] = useState("");
  useEffect(() => {
    async function getData(callback) {
      const response = await fetch(`/api/guide`);
      const responseData = await response.json();
      //   const data = JSON.parse(responseData);
      setData(responseData);
      setIsLoading(false);
    }
    getData();
  }, []);
  //   console.log(data[selectGuide]);
  return (
    <div className="flex flex-col gap-2">
      <div>
        <select
          name="guideSelected"
          id="guide"
          className="w-36 p-2"
          onChange={(e) => setSelectGuide(e.target.value)}
        >
          <option value="select">select Guide</option>
          {Object.keys(data).map((key) => (
            <option value={key}>{key}</option>
          ))}
        </select>
      </div>
      <div className="h-[80vh] overflow-scroll">
        {selectGuide && (
          <GuideMain data={data[selectGuide]} category={selectGuide} />
        )}
      </div>
    </div>
  );
}
