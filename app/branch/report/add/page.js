"use client";

import PForm from "@components/main/report/PForm";
import RForm from "@components/main/report/RForm";
import { monthNames } from "@components/utils/TableData";
import { useAddReportDataMutation } from "@features/report/reportSlice";

import React, { useState } from "react";
import { toast } from "react-toastify";

export default function page() {
  const [receiptData, setReceiptData] = useState({});
  const [paymentData, setPaymentData] = useState({});
  const [addReportData] = useAddReportDataMutation();
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(
    `${String(new Date().getMonth() + 1).padStart(2, "0")}`
  ); // Adding 1 to match month numbers (1-12)
  const [reportingMonth, setReportingMonth] = useState(
    new Date().getFullYear() + selectedMonth
  );
  // Function to handle form submission
  const handleDate = (e) => {
    const reportingMonths = String(selectedYear) + selectedMonth;
    e.preventDefault();
    setReportingMonth(reportingMonths);
    console.log(`Selected Month: ${reportingMonths}`);
    // You can perform any further actions with the selected year and month here
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        receiptData: receiptData,
        paymentData: paymentData,
        reportingMonth: reportingMonth,
      };
      await addReportData(data);
      // toast("success");
    } catch (error) {
      new Error(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-4 min-w-full h-[80vh] overflow-scroll ">
      <p className="text-xl text-center bg-green-300 p-2 rounded-md min-w-full">
        Healtd Report page
      </p>
      <form onSubmit={handleDate} className="flex gap-2 h-10 p-2 bg-green-200">
        <div className="flex gap-2">
          <label htmlFor="year" className="">
            Year:
          </label>
          <select
            id="year"
            name="year"
            value={selectedYear}
            className="h-7 w-32"
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
          >
            {/* Generate year options from 2022 to the current year */}
            {/* You can adjust the end year dynamically if needed */}
            {/* In this example, we set it to the current year */}
            {Array.from({ length: new Date().getFullYear() - 2021 }, (_, i) => (
              <option key={2022 + i} value={2022 + i}>
                {2022 + i}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-2">
          <label htmlFor="month">Month:</label>
          <select
            id="month"
            name="month"
            value={selectedMonth}
            className="w-32 h-7"
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {/* Generate month options from 1 (January) to 12 (December) */}
            {monthNames.map((month, index) => (
              <option
                key={index + 1}
                value={`${String(index + 1).padStart(2, "0")}`}
              >
                {month}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-30 bg-blue-200 rounded-full hover:bg-slate-400 px-4 h-7 duration-700"
        >
          Select Reporting Month
        </button>
      </form>

      <div className="text-xl w-full text-center flex justify-between bg-green-300 p-2 rounded-md min-w-full">
        <div className="w-full"></div>
        <div className="text-center w-full ">Receipt Payment Report </div>

        <span className=" w-full">
          Reporting Month:
          <span className=" px-3">
            {monthNames[parseInt(selectedMonth) - 1] + "/" + selectedYear}
          </span>
        </span>
      </div>
      <div className="w-full flex relative">
        <RForm receiptData={receiptData} setReceiptData={setReceiptData} />
        <PForm paymentData={paymentData} setPaymentData={setPaymentData} />
      </div>
      <div className="ring-1 p-1 px-2 w-auto min-w-[25rem] flex justify-between bg-slate-300 text-lg font-bold">
        <span className="w-1/2 flex ">
          <span className="w-1/2">Receipt Total</span>

          <span className="text-center font-bold bg-green-300 w-1/2 rounded-md">
            {Object.values(receiptData).reduce(
              (total, value) => total + value,
              0
            )}
          </span>
        </span>

        <span className="text-center font-bold w-1/2  flex justify-between ">
          <span className="w-1/2">Payment Total</span>
          <span className="w-1/2 bg-green-300 rounded-md">
            {Object.values(paymentData).reduce(
              (total, value) => total + value,
              0
            )}
          </span>
        </span>
      </div>
      <button className="btn bg-green-300" onClick={handleSubmit}>
        Submit Report
      </button>
    </div>
  );
}
