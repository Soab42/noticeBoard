"use client";

import FilterData from "@components/dashboard/FilterData";
import SemiNav from "@components/dashboard/SemiNav";
import SortBy from "@components/dashboard/SortBy";
import TopNavAdmin from "@components/dashboard/TopNavAdmin";
import Search from "@components/utils/Search";
import React from "react";
import { BsTicket, BsX } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";

export default function UserPage() {
  const users = [
    {
      sl: 1,
      branchCode: "B123",
      branchName: "Sample Branch",
      email: "branch@example.com",
      address: "123 Main Street, City",
      bmMobNo: "123-456-7890",
      aoMobNo: "987-654-3210",
      status: "Active",
    },
    {
      sl: 1,
      branchCode: "B123",
      branchName: "Sample Branch",
      email: "branch@example.com",
      address: "123 Main Street, City",
      bmMobNo: "123-456-7890",
      aoMobNo: "987-654-3210",
      status: "pending",
    },
    {
      sl: 1,
      branchCode: "B123",
      branchName: "Sample Branch",
      email: "branch@example.com",
      address: "123 Main Street, City",
      bmMobNo: "123-456-7890",
      aoMobNo: "987-654-3210",
      status: "Active",
    },
    {
      sl: 1,
      branchCode: "B123",
      branchName: "Sample Branch",
      email: "branch@example.com",
      address: "123 Main Street, City",
      bmMobNo: "123-456-7890",
      aoMobNo: "987-654-3210",
      status: "Active",
    },
    {
      sl: 100,
      branchCode: "B123",
      branchName: "Sample Branch",
      email: "branch@example.com",
      address: "123 Main Street, City",
      bmMobNo: "123-456-7890",
      aoMobNo: "987-654-3210",
      status: "Active",
    },
  ];
  return (
    <div>
      <div className="flex justify-between p-2 bg-blue-300">
        <FilterData />
        <SortBy />
        {/* //<AddUser /> */}
      </div>
      <div className="w-full text-3xl bg-[aquamarine] p-2 text-center">
        User List
      </div>
      <div className="px-5 my-2">
        <Search />
      </div>
      <div className="userlist capitalize">
        <table className="w-full flex flex-col">
          <th className="w-full flex justify-between p-2 ring-1">
            <td className="slCell">sl</td>
            <td className="userCell">branch code</td>
            <td className="userCell">branch Name</td>
            <td className="userCell">email</td>
            <td className="userCell">Address</td>
            <td className="userCell">Bm Mob No</td>
            <td className="userCell">Ao Mob No</td>
            <td className="userCell">Status</td>
          </th>

          {users.map(
            ({
              sl,
              branchCode,
              bmMobNo,
              branchName,
              email,
              status,
              address,
              aoMobNo,
            }) => {
              return (
                <tr className="w-full flex justify-between p-2 ring-1">
                  <td className="slCell">{sl}</td>
                  <td className="userCell">{branchCode}</td>
                  <td className="userCell">{branchName}</td>
                  <td className="userCell">{email}</td>
                  <td className="userCell">{address}</td>
                  <td className="userCell">{bmMobNo}</td>
                  <td className="userCell">{aoMobNo}</td>

                  <td className="userCell">
                    {status === "pending" ? (
                      <div className="flex px-2 gap-2">
                        <button className="flex items-center bg-green-400 p-2 text-xl rounded-full hover:opacity-70 active:opacity-100">
                          <IoMdCheckmark />
                        </button>{" "}
                        <button className="flex items-center bg-red-400 p-2 text-xl rounded-full hover:opacity-70 active:opacity-100">
                          <BsX />
                        </button>
                      </div>
                    ) : (
                      <div>{status}</div>
                    )}
                  </td>
                </tr>
              );
            }
          )}
        </table>
      </div>
    </div>
  );
}
