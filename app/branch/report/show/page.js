"use client";
import Payment from "@components/main/report/Payment";
import Receipt from "@components/main/report/Receipt";
import React, { useState } from "react";

export default function page() {
  const [receipt, setReceipt] = useState(true);
  return (
    <div className="h-[80vh] w-full">
      <div className="flex justify-between w-1/2">
        <button
          className={`btn ${receipt && "bg-green-300"}`}
          onClick={() => setReceipt(true)}
        >
          Receipt
        </button>
        <button
          className={`btn ${!receipt && "bg-green-300"}`}
          onClick={() => setReceipt(false)}
        >
          Payment
        </button>
      </div>
      <div className="p-2 overflow-scroll h-[80vh]  -scroll-mb-44">
        {receipt ? <Receipt /> : <Payment />}
      </div>
    </div>
  );
}
