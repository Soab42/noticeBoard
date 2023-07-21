"use client";
import React, { useState } from "react";
// import LeftBar from "./leftBar";
import Catagories from "./Catagories";
import SingleFile from "./SingleFile";
import Search from "@components/utils/Search";

import { useSelector } from "react-redux";
import { useGetDatabaseAllQuery } from "@features/database/dbApi";
import SingleLoader from "@components/utils/SingleLoader";

export default function LeftComponent() {
  const search = useSelector((state) => state.filter.search);
  const [pathName, setpathName] = useState("circuler");
  const { data, isError, isLoading, isSuccess } = useGetDatabaseAllQuery();
  console.log(data);
  const filteredData = data?.circuler.filter(
    (item) => item?.tag?.includes(search) || item?.createdAt?.includes(search)
  );
  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-between w-full">
        <div className="w-64 xl:flex md:flex hidden">
          <Catagories />
        </div>
        <div className="grid  p-2 gap-1 ">
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
      <div className="flex justify-between w-full">
        <div className="w-64 xl:flex md:flex hidden">
          <Catagories />
        </div>
        <div className="grid  p-2 gap-1 ">
          <Search />
          <div className="overflow-hidden grid h-[78vh] w-full ">
            <div className="flex flex-col gap-2 p-2 w-full overflow-scroll">
              {filteredData &&
                filteredData?.map((sdata, i) => {
                  // console.log(sdata);
                  return <SingleFile folder={pathName} data={sdata} key={i} />;
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return content;
}
