import Link from "next/link";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

export default function BranchInfoCard({ branch }) {
  const {
    BranchName,
    BranchCode,
    MailingAddress,
    MobileNo,
    Latitude,
    Longitude,
  } = branch;
  return (
    <div className="w-1/3 bg-black/20 backdrop-blur-md p-2 gap-1 grow lg:text-lg grid rounded-md min-h-60 max-h-72 max-w-1/2 text-sm">
      <div className="text-center text-lg lg:text-xl font-bold text-green-400 bg-black/20 p-0.5 rounded-lg lg:h-10">
        {BranchName}-{BranchCode}
      </div>

      <div className="text-center">Mobile No: {MobileNo}</div>
      <div className="text-center">{MailingAddress}</div>

      <Link
        className="mt-2 rounded-lg text-orange-500 hover:text-orange-200 duration-300 bg-black/30 p-1 text-center flex lg:h-9 justify-center capitalize hover:bg-black/50 "
        href={`https://www.google.com/maps?q=${Latitude},${Longitude}`}
        target="_blank"
      >
        <p>Get Location</p>
        <span className="hover:rotate-180 duration-500">
          <FaLocationArrow />
        </span>
      </Link>
    </div>
  );
}
