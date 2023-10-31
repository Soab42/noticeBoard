import Link from "next/link";
import React from "react";
import { BsBookmarkHeart } from "react-icons/bs";

export default function ShortCut({ data, link }) {
  //   console.log(data);
  return (
    <Link
      href={`/branch/guide/${link}`}
      className="filter-btn text-start min-w-fit"
    >
      <div className="text-green-600">
        <BsBookmarkHeart />
      </div>
      {data.title}
    </Link>
  );
}
