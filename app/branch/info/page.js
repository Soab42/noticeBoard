"use client";
import Website from "@components/main/Website";
import BranchInfoCard from "@components/main/branchInfoCard";
import RightBar from "@components/main/rightBar";

import Search from "@components/utils/Search";
import BranchLoader from "@components/utils/branchLoader";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { handleScroll } from "@components/utils/infiniteScrollCopy";
export default function page() {
  const [branchInfo, setBranchInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const contentParPage = 10;

  const search = useSelector((state) => state.filter.search);
  useEffect(() => {
    async function getData(callback) {
      setIsLoading(true);
      const response = await fetch("/api/branchinfo");
      const responseData = await response.json();
      //   const data = JSON.parse(responseData);
      setBranchInfo(responseData[0]);
      setIsLoading(false);
    }
    getData();
  }, []);
  // console.log(branchInfo);
  const filteredData =
    branchInfo &&
    branchInfo
      ?.filter(
        (item) =>
          item?.BranchName?.toLowerCase().includes(search.toLowerCase()) ||
          item?.BranchCode?.toString().includes(search)
      )
      .sort((a, b) => a.BranchName.localeCompare(b.BranchName));
  // console.log(filteredData);
  return (
    <div className=" flex justify-between ">
      <div className="lg:min-w-[15%]">
        <Website />
      </div>
      <main className="text-blue-400/70 p-4 w-full text-center  grid gap-2">
        <p className="text-2xl bg-black/40 py-3 uppercase w-full">
          Branch Info
        </p>
        <Search />
        <div className="h-[78vh]">
          {isLoading ? (
            <div className="flex flex-wrap gap-3 p-4">
              <BranchLoader />
              <BranchLoader />
              <BranchLoader />
              <BranchLoader />
              <BranchLoader />
            </div>
          ) : (
            <div
              className="flex flex-wrap gap-3 p-4 overflow-scroll h-full"
              onScroll={(e) => handleScroll(e, setPage)}
            >
              {filteredData
                ?.slice(0, page * contentParPage)
                ?.map((branch, i) => {
                  // console.log(branch);
                  return <BranchInfoCard branch={branch} key={i} />;
                })}
            </div>
          )}
        </div>
      </main>
      <div className="lg:min-w-[15%] p-1">
        <RightBar />
      </div>
    </div>
  );
}
