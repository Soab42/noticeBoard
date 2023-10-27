import Link from "next/link";
import React from "react";
import { SiZend, SiWwe } from "react-icons/si";

import { FaHeartCircleCheck, FaPeopleGroup } from "react-icons/fa6";
import { MdMeetingRoom, MdWebStories } from "react-icons/md";
import { BsHr } from "react-icons/bs";

export default function Website() {
  return (
    <div className=" w-full p-2 shadow-md xl:grid md:grid hidden   items-center backdrop-blur-2xl gap-2 ">
      <h1 className="text-2xl text-[#23af84] flex justify-center items-center gap-2 text-center mb-2">
        <SiWwe /> Website
      </h1>
      <div className="flex w-full min-w-fit flex-col gap-2">
        <Link
          href={"https://microfin360.com/pmk"}
          target="_blank"
          className="filter-btn  flex  gap-4 "
        >
          <div className="w-6">
            <img
              className=""
              alt="logo"
              src={
                "https://mfnext.microfin360.com/pmk/img/MF360Next_No_Text.png"
              }
              width={25}
            />
          </div>
          Microfin360
        </Link>
        <Link
          href={"https://loancalcall.web.app"}
          target="_blank"
          className="filter-btn  flex  gap-4 "
        >
          <div className="w-6">
            <img
              className="rounded-md"
              alt="logo"
              src={"https://loancalcall.web.app/favicon.ico"}
              width={25}
            />{" "}
          </div>
          Interest Calculation
        </Link>
        <Link
          href={"http://103.139.165.110:8080/index.php"}
          target="_blank"
          className="filter-btn  flex  gap-4 "
        >
          <div className="w-6">
            <div className="text-xl text-green-500">
              <FaHeartCircleCheck />
            </div>
          </div>
          Health Software
        </Link>

        <Link
          href={"https:///pmk-bd.org:2096"}
          target="_blank"
          className="filter-btn  flex  gap-4 "
        >
          <img
            className="rounded-md scale-150"
            alt="logo"
            src={
              "https://pmk-bd.org:2096/cPanel_magic_revision_1559160842/unprotected/cpanel/images/webmail-logo.svg"
            }
            width={30}
          />{" "}
          Webmail
        </Link>
        <Link
          href={"https://pmk-bd.org"}
          target="_blank"
          className="filter-btn  flex  gap-4 "
        >
          <div className="w-6">
            <img
              className="scale-125"
              alt="logo"
              src={
                "https://firebasestorage.googleapis.com/v0/b/health-3381c.appspot.com/o/others%2Fpmklogo_2023-08-05?alt=media&token=cbd75af4-d719-4ac0-a439-32a5646d36e8"
              }
              width={30}
            />
          </div>
          PMK Website
        </Link>
        <Link
          href={"https://smartenterprisezone.com/pmk"}
          target="_blank"
          className="filter-btn  flex  gap-4 "
        >
          <div className="w-6">
            {/* <img
              className="rounded-md"
              alt="logo"
              src={
                "http://smartenterprisezone.com/Pmk/Content/SmartHomeAssets/images/HRM_New.png"
              }
              width={25}
            /> */}
            <FaPeopleGroup />
          </div>
          Smart Enterprise
        </Link>
        <Link href={"/branch/info"} className="filter-btn  flex  gap-4 ">
          <div className="w-6">
            <img
              className="scale-125"
              alt="logo"
              src={
                "https://firebasestorage.googleapis.com/v0/b/health-3381c.appspot.com/o/others%2Fpmklogo_2023-08-05?alt=media&token=cbd75af4-d719-4ac0-a439-32a5646d36e8"
              }
              width={30}
            />
          </div>
          PMK Branch Info
        </Link>
      </div>
    </div>
  );
}
