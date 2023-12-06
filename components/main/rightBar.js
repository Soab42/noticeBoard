"use client";
import { useGetGuideAllQuery } from "@features/guide/guideApi";
import Link from "next/link";
import React from "react";
import { BsBookmarkCheck, BsBookmarkHeart } from "react-icons/bs";
import { MdAppShortcut } from "react-icons/md";
import ShortCut from "./ShortCut";

export default function RightBar() {
  const { data, isSuccess } = useGetGuideAllQuery();
  // console.log(data);
  return (
    <div className="p-4 md:w-56 xl:w-64  shadow-md xl:block items-center backdrop-blur-2xl gap-2 ">
      <p className="text-2xl flex text-center items-center gap-2 mb-3 justify-center text-[#23af84]">
        <MdAppShortcut /> Shortcut Guide
      </p>
      <div className="flex-col gap-2 overflow-scroll xl:h-[76vh] w-full">
        {isSuccess &&
          Object.entries(data).map((entry) => (
            <ShortCut data={entry[1]} link={entry[0]} />
          ))}
      </div>
    </div>
  );
}
