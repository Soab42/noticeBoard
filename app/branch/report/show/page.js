"use client";
import Payment from "@components/main/report/Payment";
import Receipt from "@components/main/report/Receipt";
import { monthNames } from "@components/utils/TableData";
import { getThisYearData } from "@components/utils/calculation";
import { useGetRpReportQuery } from "@features/report/reportSlice";
import React, { useState } from "react";

export default function page() {
  const [receipt, setReceipt] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(
    `${String(new Date().getMonth() + 1).padStart(2, "0")}`
  ); // Adding 1 to match month numbers (1-12)
  const [reportingMonth, setReportingMonth] = useState(
    new Date().getFullYear() + selectedMonth
  );
  const {
    data: allData,
    isLoading,
    isSuccess,
  } = useGetRpReportQuery(reportingMonth);
  const { data, thisYearData, cumulativeData } = allData || {};
  // data?.map((zone) => console.log(zone));

  // const thisYear = getThisYearData(thisYearData);
  // console.log(thisYearData);

  const handleDate = (e) => {
    const reportingMonths = String(selectedYear) + selectedMonth;
    e.preventDefault();
    setReportingMonth(reportingMonths);
    reportingMonths && setShow(true);
    // console.log(`Selected Month: ${reportingMonths}`);
    // You can perform any further actions with the selected year and month here
  };

  return (
    <div className="h-[80vh] w-full">
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
      <div className="p-2 overflow-scroll h-[80vh] xl:pb-20 pb-44">
        {show && isSuccess ? (
          receipt ? (
            <Receipt
              data={data}
              thisYearData={thisYearData}
              cumulativeData={cumulativeData}
            />
          ) : (
            <Payment
              data={data}
              thisYearData={thisYearData}
              cumulativeData={cumulativeData}
            />
          )
        ) : (
          <div>Select Month For See Report</div>
        )}
      </div>
    </div>
  );
}
