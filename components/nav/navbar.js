"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import NavList from "./NavList";
import BurgerMenu from "./BurgerMenu";
import NavSm from "./NavSm";

export default function navbar() {
  const [show, setShow] = useState(false);
  const pathName = usePathname().slice(1);
  // console.log(pathName);

  return (
    <div className="dashboard  shadow-xl z-10">
      {/* <div className=" h-full">
        <img
          src="assets/web.png"
          alt=""
          className="absolute w-screen h-full -z-10 "
        />
      </div> */}

      <div className="flex backdrop-blur-md h-[4rem] shadow-xl p-5 justify-between items-center">
        {/* Main logo */}
        <h1
          className={`logo capitalize font-bold text-[#23af84] text-3xl flex justify-between`}
        >
          <Link href={"/"}>Notice board</Link>
        </h1>
        {/* hamburger menu for mobile devices */}
        <div className="relative">
          <BurgerMenu setShow={setShow} show={show} />
          {<NavSm setShow={setShow} show={show} pathName />}
        </div>
        <div className="hidden "></div>
        {/* list of nav menu for big devices*/}
        {/* <NavList setShow show pathName={pathName} /> */}
      </div>
    </div>
  );
}
