import React from "react";
import SingleLink from "./Singlelink";
import SingleLinkLoader from "@components/utils/SinglelinkL";
import { useGetSelectedDataQuery } from "@features/selectedData/selectedDataApi";

export default function Regulation() {
  const { data, isError, isLoading } = useGetSelectedDataQuery("regulation");
  const recentRegulation = data || [];
  // const isLoading = true;
  let content;
  if (isLoading) {
    content = (
      <div className="grid w-full">
        <SingleLinkLoader />
        <SingleLinkLoader />
        <SingleLinkLoader />
        <SingleLinkLoader />
        <SingleLinkLoader />
      </div>
    );
  }
  if (!isLoading && !isError && recentRegulation?.length > 0) {
    content = recentRegulation?.map((regulation, sl) => {
      return <SingleLink data={regulation} folder={"regulation"} key={sl} />;
    });
  }
  if (!isLoading && !isError && recentRegulation.length == 0) {
    content = (
      <p className="w-full h-full p-10 text-center flex justify-center items-center text-sky-600 text-2xl">
        No Data available
      </p>
    );
  }
  return (
    <div className=" p-2 xl:w-full flex flex-col gap-1 rounded-md bg-[rgba(141,96,247,0.091)] ">
      <p className="w-full text-center pl-4 text-xl   text-[#23af84] border-b-2 border-[#23af84]  rounded-md p-1">
        Recent Meeting Regulation
      </p>
      <div className="flex flex-col flex-wrap gap-2 justify-around text-center">
        {content}
      </div>
    </div>
  );
}
