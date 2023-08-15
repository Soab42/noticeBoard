"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function page() {
  const pathname = usePathname();
  return <div>{`we are currently ${pathname} page`}</div>;
}
