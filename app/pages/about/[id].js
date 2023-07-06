/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React from "react";

export default function id() {
  const router = useRouter();

  return <div>{router.query.id}</div>;
}
