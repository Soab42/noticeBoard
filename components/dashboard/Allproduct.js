"use client";
import React, { useState } from "react";
// import LeftBar from "./leftBar";

import Search from "@components/utils/Search";

import { useSelector } from "react-redux";
import { useGetDatabaseAllQuery } from "@features/database/dbApi";
import SingleLoader from "@components/utils/SingleLoader";
import SingleFileDatabase from "./SingleFileDataBase";
import { handleScroll } from "@components/utils/infiniteScrollCopy";

export default function LeftComponent() {
  const search = useSelector((state) => state.filter.search);
  // console.log(search);
  const { data, isError, isLoading, isSuccess } = useGetDatabaseAllQuery();
  const [page, setPage] = useState(1);
  const contentParPage = 10;

  const filteredData =
    !isLoading &&
    data
      ?.filter((item) => {
        // Check if any of the tags partially match the search term
        const matchingTags = item?.tags?.filter((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        );

        // Return true if any tag matches, or if the createdAt includes the search term
        return matchingTags?.length > 0 || item?.createdAt?.includes(search);
      })
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-between w-full">
        <div className="flex flex-col  p-2 gap-1 w-full">
          <Search />
          <div className="overflow-hidden grid h-[78vh] w-full ">
            <div className="flex flex-col gap-2 p-2 w-full overflow-scroll">
              <SingleLoader />
              <SingleLoader />
              <SingleLoader />
              <SingleLoader />
              <SingleLoader />
              <SingleLoader />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!isError && !isLoading) {
    content = (
      <div className="flex flex-col xl:flex-row justify-between w-full">
        <div className="flex flex-col w-full  p-2 gap-1 ">
          <Search />
          <div className="overflow-hidden grid h-[75vh] w-full ">
            <div
              className="flex flex-col gap-2 p-2 w-full overflow-scroll"
              onScroll={(e) => handleScroll(e, setPage)}
            >
              {filteredData &&
                filteredData
                  ?.slice(0, page * contentParPage)
                  ?.map((sdata, i) => {
                    // console.log(sdata);
                    return <SingleFileDatabase data={sdata} key={i} />;
                  })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return content;
}
