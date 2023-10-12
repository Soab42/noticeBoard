import React from "react";

import { DM_Serif_Display } from "next/font/google";
import { SlLock, SlUser } from "react-icons/sl";
import { BsInfoCircle } from "react-icons/bs";
const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});
export default function MF360FormComp({
  isLoading,
  fetchData,
  setUsername,
  setPassword,
  setMemberId,
  err,
}) {
  return (
    <div className="bg-[linear-gradient(305deg,#2d58a7,#508abd)] w-full flex flex-col justify-between h-full py-4 relative">
      <img
        src="https://mfnext.microfin360.com/pmk//img/login/right-top.png"
        alt=""
        className="absolute top-0 right-0 opacity-70 h-36"
      />
      <div></div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col w-full gap-5 ">
          <div className=" flex items-center justify-center gap-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/health-3381c.appspot.com/o/others%2Fpmklogo_2023-08-05?alt=media&token=cbd75af4-d719-4ac0-a439-32a5646d36e8"
              alt="logo"
              className="w-12"
            />
            <span
              className={`capitalize text-xl text-slate-100 font-bold font-serif ${serif.className}`}
            >
              MicroFin360
            </span>
          </div>

          <div className="">
            <p
              className={`text-center font-bold font-serif text-[.8rem] text-slate-200 ${serif.className}`}
            >
              Sign in to your account
            </p>
          </div>
        </div>
        <form className="flex flex-col gap-2 text-sm" onSubmit={fetchData}>
          <div className="flex justify-center items-center rounded-md">
            <div className="icon bg-slate-200 h-8 p-2 rounded-l-[.2rem]">
              <SlUser />
            </div>
            <input
              type="text"
              placeholder="Username"
              autoComplete="off"
              required
              className="w-44 h-8 pl-2 outline-none "
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center rounded-md">
            <div className="icon bg-slate-200 h-8 p-2 rounded-l-[.2rem]">
              <SlLock />
            </div>
            <input
              type="password"
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-44 h-8 pl-2 "
            />
          </div>
          <div className="flex justify-center items-center rounded-md">
            <div className="icon bg-slate-200 h-8 p-2 rounded-l-[.2rem]">
              <BsInfoCircle />
            </div>
            <input
              type="text"
              placeholder="020045157 or 002n1064327"
              autoComplete="off"
              min={9}
              max={11}
              onChange={(e) => setMemberId(e.target.value)}
              required
              className="w-44 h-8 pl-2 relative outline-none "
            />
          </div>
          <button
            type="submit"
            disabled={err || isLoading}
            className="p-[.4rem] mt-5 font-semibold bg-slate-300 text-slate-700 rounded-md mx-[2.8rem] relative"
          >
            Get Loan Info
            {err && (
              <p className="text-red-500 absolute -top-6 text-[10px]">
                {"Member ID must be between 9 and 11 characters."}
              </p>
            )}
          </button>
        </form>
      </div>
      <div className="row z-10">
        <div className="text-slate-400 text-xs">
          <p>Copyright © 2001- 2023 DataSoft Systems Bangladesh Ltd</p>
        </div>
      </div>
      <img
        src="https://mfnext.microfin360.com/pmk//img/login/left-bottom.png"
        alt=""
        className="absolute bottom-0 left-0 opacity-70 h-36"
      />
    </div>
  );
}
// --cssBottomImg: url(https://mfnext.microfin360.com/pmk//img/login/left-bottom.png); --cssTopImg: url(https://mfnext.microfin360.com/pmk//img/login/right-top.png);
