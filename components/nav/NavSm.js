import React from "react";
import Link from "next/link";
export default function NavSm({ show, setShow }) {
  return (
    <div
      className={`duration-1000 absolute backdrop-blur-md grid gap-1  text-center p-2  top-10 text-sm w-56 ${
        !show ? "left-44" : "-left-20"
      }`}
    >
      <Link onClick={() => setShow(!show)} className={"navLink"} href={"/"}>
        Home
      </Link>
      <Link
        onClick={() => setShow(!show)}
        className={"navLink "}
        href={"circuler"}
      >
        {" "}
        Circuler
      </Link>
      <Link
        onClick={() => setShow(!show)}
        className={"navLink "}
        href={"regulation"}
      >
        Regulation
      </Link>
      <Link
        onClick={() => setShow(!show)}
        className={"navLink"}
        href={"format"}
      >
        Format
      </Link>
      <Link
        onClick={() => setShow(!show)}
        className={"navLink "}
        href={"report"}
      >
        Report
      </Link>
      <Link onClick={() => setShow(!show)} className={"navLink"} href={"job"}>
        Job
      </Link>
      <Link
        onClick={() => setShow(!show)}
        className={"navLink "}
        href={"others"}
      >
        Other
      </Link>
    </div>
  );
}
