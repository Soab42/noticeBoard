"use client";
import React from "react";

import Catagories from "./Catagories";
import SingleFile from "./SingleFile";
import Search from "@components/utils/Search";
import { useGetSelectedDataQuery } from "@features/selectedData/selectedDataApi";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import SingleLoader from "@components/utils/SingleLoader";

export default function LeftComponent() {
  const pathName = usePathname().split("/");
  // console.log(pathName);
  const search = useSelector((state) => state.filter.search);
  const { data, isError, isLoading } = useGetSelectedDataQuery(pathName[2]);
  // const isLoading = true

  const filteredData = data
    ? Object?.values(data)?.filter((item) => {
        if (!search) {
          return true;
        }
        return (
          item?.tags?.includes(search) || item?.createdAt?.includes(search)
        );
      })
    : [];
  console.log(filteredData);

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

  if (!isError && !isLoading) {
    content = (
      <div className="xl:flex xl:flex-row  w-full flex flex-col justify-between p-2 gap-1">
        <div className="w-[15%]">
          <Catagories />
        </div>
        <div className="flex flex-col gap-2 p-2 w-full">
          <Search />
          <div className="overflow-hidden grid h-[78vh] ">
            <div className="flex flex-col gap-2 p-2 w-full overflow-scroll">
              {filteredData.length > 0 ? (
                filteredData?.map((sdata, i) => {
                  // console.log(sdata);
                  return <SingleFile data={sdata} key={i} />;
                })
              ) : (
                <p className="h-full text-sky-500 text-3xl text-center">
                  No data found
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return content;
}
