import React from "react";
import SingleLink from "./Singlelink";
import { useGetDatabaseAllQuery } from "@features/database/dbApi";
import SingleLinkLoader from "@components/utils/SinglelinkL";

export default function LeftBottom() {
  const { data, isError, isLoading, isSuccess } = useGetDatabaseAllQuery();

  const recentFormat = data?.format?.slice(0, 5);
  let content;
  if (isLoading) {
    content = (
      <div className="w-[29rem] xl:w-[50rem] h-full shadow-lg  bg-[rgba(250,250,250,.05)] p-2  flex flex-col gap-1 rounded-md">
        <p className="min-w-full text-center pl-4 text-xl border-b-2 border-[#23af84]  backdrop-blur-sm text-[#23af84] rounded-md p-1">
          Recently Added On Office Circular
        </p>{" "}
        <div className=" w-full">
          <SingleLinkLoader />
          <SingleLinkLoader />
          <SingleLinkLoader />
          <SingleLinkLoader />
          <SingleLinkLoader />
        </div>
      </div>
    );
  }
  if (!isLoading && !isError) {
    content = (
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
  return content;
}
