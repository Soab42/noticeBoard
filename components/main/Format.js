import React from "react";
import SingleLink from "./Singlelink";

import SingleLinkLoader from "@components/utils/SinglelinkL";
import { useGetSelectedDataQuery } from "@features/selectedData/selectedDataApi";

export default function Format() {
  const { data, isError, isLoading } = useGetSelectedDataQuery("format");
  // const isLoading = true;
  const recentFormat = !isLoading && data.slice(0, 5);
  // console.log(recentFormat);
  // const recentFormat = data?.format?.slice(0, 5);
  let content;
  if (isLoading) {
    content = (
      <div className="w-full">
        <SingleLinkLoader />
        <SingleLinkLoader />
        <SingleLinkLoader />
        <SingleLinkLoader />
        <SingleLinkLoader />
      </div>
    );
  }
  if (!isLoading && !isError && recentFormat?.length > 0) {
    content = recentFormat.map((format, sl) => (
      <SingleLink data={format} folder={"format"} key={sl} />
    ));
  }
  if (!isLoading && !isError && recentFormat.length === 0) {
    content = (
      <p className="w-full h-full p-10 text-center flex justify-center items-center text-sky-600 text-2xl">
        No Data available
      </p>
    );
  }
  return (
    <div className="ml-2 p-2 xl:w-full flex flex-col gap-1 rounded-md bg-[rgba(96,174,247,0.091)] ">
      <p className="w-full text-center pl-4 text-xl text-[#23af84] border-b-2 border-[#23af84]   rounded-md p-1">
        Recent Format
      </p>
      <div className="flex flex-col gap-2">{content}</div>
    </div>
  );
}
