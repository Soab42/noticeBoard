"use client";
import React, { useState } from "react";
import LeftBar from "./leftBar";
import Catagories from "./Catagories";
import SingleFile from "./SingleFile";
import Search from "@components/utils/Search";

import { useSelector } from "react-redux";
import { useGetDatabaseAllQuery } from "@features/database/dbApi";

export default function LeftComponent() {
  const search = useSelector((state) => state.filter.search);
  const [pathName, setpathName] = useState("circuler");
  const { data, isError, isLoading, isSuccess } = useGetDatabaseAllQuery();
  console.log(data);

  // Create an array containing all objects from the nested structure
  // const allObjectsArray = getAllObjects(data);
  // console.log(allObjectsArray);

  const filteredData = data?.circuler.filter(
    (item) => item?.tag?.includes(search) || item?.createdAt?.includes(search)
    // search === ""
    // console.log(item)
  );

  return (
    <div className="flex justify-between w-full">
      <div className="w-64 sm:hidden">
        <Catagories />
      </div>
      <div className="xl:grid-flow-col md:grid-flow-col grid justify-between p-2 gap-1">
        <Search />
        <div className="overflow-hidden grid h-[78vh] ">
          <div className="flex flex-col gap-2 p-2 w-full overflow-scroll">
            {filteredData?.map((sdata, i) => {
              // console.log(sdata);
              return <SingleFile folder={pathName} data={sdata} key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
