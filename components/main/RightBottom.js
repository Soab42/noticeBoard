import { useGetDatabaseAllQuery } from "@features/database/dbApi";
import React from "react";
import SingleLink from "./Singlelink";

export default function RightBottom() {
  const { data, isError, isLoading, isSuccess } = useGetDatabaseAllQuery();

  const recentRegulation = data?.regulation.regulation?.slice(0, 5);

  return (
    <div className=" p-2 xl:w-[49%] flex flex-col gap-1 rounded-md bg-[rgba(141,96,247,0.091)] ">
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
