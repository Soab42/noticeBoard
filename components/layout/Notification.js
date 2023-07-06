/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import React from "react";
import Slidetext from "./SlideText";

export default function Notification() {
  return (
    <div className="bg-black h-12 text-white sigmar flex items-center w-screen overflow-hidden">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        ></link>
      </Head>
      <div className="font-['Rajdhani'] h-full flex items-center text-md ">
        <div className="flex gap-4 justify-between w-screen px-2">
          <div className="flex gap-1 justify-start items-center">
            <div className="custom-select-box ">
              <select
                id="basic"
                className="selectpicker show-tick form-control w-20 bg-lime-600  text-center text-black font-bold cursor-pointer mr-3"
                data-placeholder="$ USD"
              >
                <option>¥ JPY</option>
                <option>$ USD</option>
                <option>€ EUR</option>
              </select>
            </div>
            <div className="right-phone-box text-[.9rem] mr-2">
              <p>
                <i className="bi-telephone-outbound"></i> Call US :-
                <a href="#"> +11 900 800 100</a>
              </p>
            </div>
            <div>
              <ul className="flex gap-2 uppercase text-[1rem] font-bold">
                <li className="hover:text-lime-600">
                  <a href="#">
                    <i class="bi-person"></i> My Account
                  </a>
                </li>
                |
                <li className="hover:text-lime-600">
                  <a href="#">
                    <i class="bi-geo-alt-fill"></i> Our location
                  </a>
                </li>
                |
                <li className="hover:text-lime-600">
                  <a href="#">
                    <i class="bi-headset"></i>Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-4 justify-between w-1/2 mr-4 items-center">
            <Slidetext />
            <div className="">
              <select
                id="basic"
                className="selectpicker show-tick form-control w-32 bg-lime-600 text-center text-black font-bold cursor-pointer"
                data-placeholder="Sign In"
              >
                <option>Register Here</option>
                <option>Sign In</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
