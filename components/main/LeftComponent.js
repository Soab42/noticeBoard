"use client";
import React from "react";
import LeftBar from "./leftBar";
import Catagories from "./Catagories";
import SingleFile from "./SingleFile";
import Search from "@components/utils/Search";
import { useGetSelectedDataQuery } from "@features/selectedData/selectedDataApi";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function LeftComponent() {
  const pathName = usePathname().slice(1);
  console.log(pathName);
  const search = useSelector((state) => state.filter.search);
  const { data, isError, isLoading, isSuccess } =
    useGetSelectedDataQuery(pathName);

  const filteredData = data?.filter(
    (item) => item?.tag?.includes(search) || item?.createdAt?.includes(search)
    // search === ""
    // console.log(item)
  );
  console.log(filteredData);
  return (
    <div className="xl:grid-flow-col md:grid-flow-col grid justify-between p-2 gap-1">
      <div className="w-64">
        <Catagories />
      </div>
      <div className="flex flex-col gap-2 p-2 w-full">
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
