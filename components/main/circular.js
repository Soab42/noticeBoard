import React from "react";
import SingleLink from "./Singlelink";

import SingleLinkLoader from "../utils/SinglelinkL";
import { useGetSelectedDataQuery } from "@features/selectedData/selectedDataApi";
import { useSelector } from "react-redux";

export default function Circular() {
  // const user = useSelector((s) => s.user);
  const { data, isError, isLoading } = useGetSelectedDataQuery("circular");
  // const isLoading = true;
  const recentCircular = data || [];
  //   console.log(recentCircular);
  let content;
  if (isLoading) {
    content = (
      <div className="flex flex-col xl:flex-row xl:flex-wrap w-full">
        <div className="xl:w-1/2">
          <SingleLinkLoader />
        </div>
        <div className="xl:w-1/2">
          <SingleLinkLoader />
        </div>
        <div className="xl:w-1/2">
          <SingleLinkLoader />
        </div>
        <div className="xl:w-1/2">
          <SingleLinkLoader />
        </div>
        <div className="xl:w-1/2">
          <SingleLinkLoader />
        </div>
        <div className="xl:w-1/2">
          <SingleLinkLoader />
        </div>
        <div className="xl:w-1/2">
          <SingleLinkLoader />
        </div>
        <div className="xl:w-1/2">
          <SingleLinkLoader />
        </div>
        <div className="xl:w-1/2">
          <SingleLinkLoader />
        </div>
        <div className="xl:w-1/2">
          <SingleLinkLoader />
        </div>
      </div>
    );
  }
  if (!isLoading && !isError && recentCircular?.length > 0) {
    content = recentCircular?.map((circular, sl) => (
      <div className="xl:xl:w-1/2 w-full" key={sl}>
        <SingleLink data={circular} folder={"circuler"} />
      </div>
    ));
  }
  if (!isLoading && !isError && recentCircular.length == 0) {
    content = (
      <p className="w-full h-full p-10 text-center flex justify-center items-center text-sky-600 text-2xl">
        No Data available
      </p>
    );
  }
  return (
    <div className=" w-full h-full shadow-lg  bg-[rgba(250,250,250,.05)] p-2  flex flex-col gap-1 rounded-md">
      <p className=" text-center pl-4 text-xl border-b-2 border-[#23af84]  backdrop-blur-sm text-[#23af84] rounded-md p-1">
        Recent Office Circular
      </p>
      <div className="flex flex-wrap w-full">{content}</div>
    </div>
  );
}
