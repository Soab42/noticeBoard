import { useGetDatabaseAllQuery } from "@features/database/dbApi";
import React from "react";
import SingleLink from "./Singlelink";
import SingleLinkLoader from "@components/utils/SinglelinkL";

export default function RightBottom() {
  const { data, isError, isLoading } = useGetDatabaseAllQuery();

  const recentRegulation = data?.regulation?.slice(0, 5);
  // const isLoading = true;
  let content;
  if (isLoading) {
    content = (
      <div className="w-full xl:w-full h-full shadow-lg  bg-[rgba(250,250,250,.05)] p-2  flex flex-col gap-1 rounded-md">
        <p className="min-w-full text-center pl-4 text-xl border-b-2 border-[#23af84]  backdrop-blur-sm text-[#23af84] rounded-md p-1">
          Recently Added On Office Circular
        </p>
        <div className="grid w-full">
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
      <div className=" p-2 xl:w-full flex flex-col gap-1 rounded-md bg-[rgba(141,96,247,0.091)] ">
        <p className="w-full text-center pl-4 text-xl   text-[#23af84] border-b-2 border-[#23af84]  rounded-md p-1">
          Recently Added On Meeting Regulation
        </p>
        <div className="flex flex-col flex-wrap gap-2 justify-around text-center">
          {recentRegulation?.map((regulation, sl) => {
            return (
              <SingleLink data={regulation} folder={"regulation"} key={sl} />
            );
          })}
        </div>
      </div>
    );
  }
  return content;
}
