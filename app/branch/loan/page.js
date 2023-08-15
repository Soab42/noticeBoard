"use client";
import { checkImageURL } from "@components/utils/checkImage";
import { addLoan } from "@features/loan/loanSlice";

import React, { useEffect } from "react";
import { useState } from "react";
import { MdError } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import MF360FormComp from "@components/dashboard/MF360FormComp";

const LoanScheduleItem = ({ data }) => {
  const { date, installment, interest, principle, closingOutstanding } = data;
  console.log(data);
  return (
    <tr>
      <td>{date}</td>
      <td>{installment}</td>
      <td>{principle}</td>
      <td>{interest}</td>
      <td>{closingOutstanding}</td>
    </tr>
  );
};

const LoanScheduleTable = ({ loanSchedule }) => {
  // console.log(loanSchedule.to(-1));
  return (
    <table className="w-full p-5 capitalize">
      <thead>
        <tr>
          <th>Date</th>
          <th>Installment</th>
          <th>interest</th>
          <th>principle</th>
          <th>outstanding</th>
        </tr>
      </thead>
      <tbody>
        {loanSchedule?.map(
          (item, index) =>
            item.principle !== null && (
              <LoanScheduleItem key={index} data={item} />
            )
        )}
      </tbody>
      <div>
        <p className="border">Todays OutStanding</p>
        <p></p>
      </div>
    </table>
  );
};
const MemberView = ({ member, src }) => {
  return (
    <div className="flex justify-between px-4 py-1 gap-3">
      <div className="border w-56 h-36 overflow-hidden p-2 rounded-md">
        <img
          src={
            checkImageURL(src)
              ? src
              : "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
          }
          // src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
          alt="img"
          className="object-contain rounded-md duration-700 hover:scale-125 "
        >
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
            alt=""
            srcset=""
          /> */}
        </img>
      </div>
      <div className="w-full text-start">
        {member?.map((row) => (
          <div>{row}</div>
        ))}
      </div>
    </div>
  );
};
const LoanDetailsView = ({ loanDetails }) => {
  return (
    <div className="w-1/3 text-start p-1 ">
      <div className="flex justify-between border p-0.5 shadow-md px-3 hover:bg-[pink] cursor-pointer">
        Interset Rate: <span>{loanDetails?.rate}</span>
      </div>
      <div className="flex justify-between border p-0.5 shadow-md px-3 hover:bg-[pink] cursor-pointer">
        Loan amount: <span>{loanDetails?.loanAmount}</span>
      </div>

      <div className="flex justify-between border p-0.5 shadow-md px-3 hover:bg-[pink] cursor-pointer">
        Disburse Date: <span>{loanDetails.disburseDate}</span>
      </div>

      <div className="flex justify-between border p-0.5 shadow-md px-3 hover:bg-[pink] cursor-pointer">
        Duration:
        <span>
          {loanDetails.duration < 45
            ? loanDetails.duration + "month"
            : loanDetails.duration + "weeks"}
        </span>
      </div>
      <div className="flex justify-between border p-0.5 shadow-md px-3 hover:bg-[pink] cursor-pointer">
        Installment:
        <span>{loanDetails.installment}</span>
      </div>
    </div>
  );
};
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [memberId, setMemberId] = useState("123456789");
  const [err, setErr] = useState(false);
  const loan = useSelector((state) => state.loan) || [];
  const fetchData = async (e) => {
    "use sever";
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch(
      `/api/loan?username=${username}&password=${password}&memberId=${memberId}`
    );
    const data = await response.json();
    dispatch(addLoan(data));
    setIsLoading(false);
  };
  useEffect(() => {
    memberId.length >= 9 && memberId.length <= 11
      ? setErr(false)
      : setErr(true);
  }, [memberId]);
  //   console.log(loan.loan_Data);
  //   console.log(loan.loan_Schedule);
  let content;
  //   setIsLoading(false);
  if (isLoading) {
    content = (
      <div className="animate-pulse p-5 text-xl">
        Data is fetching......
        <span className="animate-ping ml-5">Please wait....</span>
      </div>
    );
  }
  if (!isLoading) {
    content =
      Object.keys(loan).length !== 0 ? (
        <>
          {/* [linear-gradient(305deg,#2d58a7,#508abd)] */}
          <div className="flex justify-between border p-0.5 shadow-md bg-[#50bda5e3]">
            <MemberView member={loan.profile_details} src={loan.photoUrl} />
            <LoanDetailsView loanDetails={loan.loanDetails} />
          </div>
          <h1 className="font-bold bg-[#408abf] text-slate-300">
            Loan Schedule
          </h1>
          <div>
            <LoanScheduleTable loanSchedule={loan?.loanSchedule} />
          </div>
        </>
      ) : (
        <div
          className="h-[70vh] flex justify-center items-center text-3xl gap-2
        "
        >
          No Data Found{" "}
          <span className="text-red-500 text-[3rem]">
            <MdError />
          </span>
        </div>
      );
  }

  return (
    <div className="p-5 text-center flex justify-between">
      <div className="w-[80%] overflow-scroll">{content}</div>
      <div className="bg-lime-300 w-[20%] h-[85vh]">
        <MF360FormComp
          isLoading={isLoading}
          fetchData={fetchData}
          setUsername={setUsername}
          setPassword={setPassword}
          setMemberId={setMemberId}
          err={err}
        />
      </div>
    </div>
  );
};

export default App;
