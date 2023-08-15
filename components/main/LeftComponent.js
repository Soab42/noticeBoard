"use client";
import React, { useState } from "react";

import Catagories from "./Website";
import SingleFile from "./SingleFile";
import Search from "@components/utils/Search";
import { useGetSelectedDataQuery } from "@features/selectedData/selectedDataApi";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import SingleLoader from "@components/utils/SingleLoader";
import { handleScroll } from "@components/utils/infiniteScrollCopy";

export default function LeftComponent() {
  const pathName = usePathname().split("/");
  // console.log(pathName);
  const [page, setPage] = useState(1);
  const contentParPage = 10;
  const search = useSelector((state) => state.filter.search);
  const { data, isError, isLoading, error } = useGetSelectedDataQuery(
    pathName[2]
  );
  // const isLoading = true

  const filteredData =
    data &&
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
  // console.log(filteredData);

  let content;
  if (isLoading) {
    content = (
      <div className="xl:flex xl:flex-row  w-full flex flex-col justify-between p-2 gap-1">
        <div className="w-[15%]">
          <Catagories />
        </div>
        <div className="flex flex-col gap-2 p-2 w-full">
          <Search />
          <div className="overflow-hidden grid h-[78vh] ">
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
  // console.log("loading", isLoading);
  // console.log("erorr", isError);
  // console.log("filteredData", filteredData);
  if (!isError && !isLoading && filteredData.length == 0) {
    content = <div className="">No data found</div>;
  }
  if (!isError && !isLoading) {
    content = (
      <div className="xl:flex xl:flex-row  w-[85%] flex flex-col justify-between p-2 gap-1 overflow-hidden">
        <div className="w-[20%] min-w-fit">
          <Catagories />
        </div>
        <div className="flex flex-col gap-2 p-2 w-full">
          <Search />
          <div className="overflow-hidden grid h-[78vh] ">
            <div
              className="flex flex-col gap-2 p-2 w-full overflow-scroll"
              onScroll={(e) => handleScroll(e, setPage)}
            >
              {filteredData.length > 0 ? (
                filteredData
                  ?.slice(0, page * contentParPage)
                  ?.map((sdata, i) => {
                    // console.log(sdata);
                    return <SingleFile data={sdata} key={i} />;
                  })
              ) : (
                <div className="text-5xl flex justify-center items-center h-full text-center text-sky-400">
                  No data found!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return content;
}
