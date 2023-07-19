import React from "react";
import SingleLink from "./Singlelink";
import { useGetDatabaseAllQuery } from "@features/database/dbApi";

export default function LeftBottom() {
  const { data, isError, isLoading, isSuccess } = useGetDatabaseAllQuery();

  const recentFormat = data?.format.format?.slice(0, 5);
  return (
    <div className="ml-2 p-2 xl:w-[49%] flex flex-col gap-1 rounded-md bg-[rgba(96,174,247,0.091)] ">
      <p className="w-full text-center pl-4 text-xl text-[#23af84] border-b-2 border-[#23af84]   rounded-md p-1">
        Recently Added On Format
      </p>
      <div className="flex flex-col flex-wrap gap-2 justify-around">
        {recentFormat?.map((format, sl) => (
          <SingleLink data={format} folder={"format"} key={sl} />
        ))}
      </div>
    </div>
  );
}
