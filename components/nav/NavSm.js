import React from "react";
import Link from "next/link";
export default function NavSm({ show, setShow }) {
  return (
    <div
      className={`duration-500 absolute backdrop-blur-md grid gap-1  text-center p-2  top-10 text-sm w-56 ${
        !show ? "left-44" : "-left-20"
      }`}
    >
      <Link
        onClick={() => setShow(!show)}
        className={"navLink"}
        href={"/branch"}
      >
        Home
      </Link>
      <Link
        onClick={() => setShow(!show)}
        className={"navLink "}
        href={"/branch/circular"}
      >
        Circular
      </Link>
      <Link
        onClick={() => setShow(!show)}
        className={"navLink "}
        href={"/branch/regulation"}
      >
        Regulation
      </Link>
      <Link
        onClick={() => setShow(!show)}
        className={"navLink"}
        href={"/branch/format"}
      >
        Format
      </Link>
      <Link
        onClick={() => setShow(!show)}
        className={"navLink "}
        href={"/branch/report"}
      >
        Report
      </Link>
      <Link
        onClick={() => setShow(!show)}
        className={"navLink"}
        href={"/branch/job"}
      >
        Job
      </Link>
      <Link
        onClick={() => setShow(!show)}
        className={"navLink "}
        href={"/branch/others"}
      >
        Other
      </Link>
    </div>
  );
}
