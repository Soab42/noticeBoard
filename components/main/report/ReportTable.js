import React from "react";
import { paymentData, reciptData } from "./Data";

export default function ReportTable({ tableRef }) {
  return (
    <div>
      {/* Payment Total */}
      <table className="grid gap-0 m-0 p-0" ref={tableRef}>
        {/* Table head */}
        <thead>
          <tr className="grid grid-flow-col grid-cols-12 p-0">
            <th className="col-span-1">SL No</th>
            <th className="col-span-3"> Description</th>
            <th className="col-span-3">
              this Month : ( 2022-07-01 To2022-07-01 ){" "}
            </th>
            <th className="col-span-3">
              this Year : (2022-07-01 To2022-07-01 )
            </th>
            <th className="col-span-4">
              Cumulative : Up To (2022-07-01 to 2022-07-01)
            </th>
          </tr>
        </thead>
        {/* Header accounts  */}
        <tr className="grid grid-flow-col grid-cols-12  items-center m-0 p-0">
          <th className="col-span-12 text-start pl-6"> Opening Balance</th>
        </tr>
        {/* Cash Position */}
        <tr className="grid grid-flow-col grid-cols-12 text-center">
          <td className="col-span-1">1</td>
          <td className="col-span-3"> Cash In Hand</td>
          <td className="col-span-3">0</td>
          <td className="col-span-3">0</td>
          <td className="col-span-4"></td>
        </tr>
        <tr className="grid grid-flow-col grid-cols-12 text-center">
          <td className="col-span-1">2</td>
          <td className="col-span-3"> Cash At Bank</td>
          <td className="col-span-3">0</td>
          <td className="col-span-3">0</td>
          <td className="col-span-4"></td>
        </tr>
        {/* total Header */}
        <tr className="grid grid-flow-col grid-cols-12 text-center p-0">
          <th className="col-span-4"> Total Cash in Hand & Cash at Bank</th>
          <th className="col-span-3">0</th>
          <th className="col-span-3">0</th>
          <th className="col-span-4"></th>
        </tr>
        {/* Receipt Option */}
        {reciptData?.map(
          ({ description, cumulativeUpTo, thisMonthTo, thisYearTo }, sl) => (
            <tr className="grid grid-flow-col grid-cols-12 text-center">
              <td className="col-span-1">{sl + 3}</td>
              <td className="col-span-3"> {description}</td>
              <td className="col-span-3">
                <input
                  type="text"
                  value={thisMonthTo}
                  className="w-full outline-none text-center"
                ></input>
              </td>
              <td className="col-span-3">{thisYearTo}</td>
              <td className="col-span-4">{cumulativeUpTo}</td>
            </tr>
          )
        )}
        {/* receipt Total */}
        <tr className="grid grid-flow-col grid-cols-12 p-0">
          <th className="col-span-4">Total Receipts</th>
          <th className="col-span-3">0</th>
          <th className="col-span-3">0</th>
          <th className="col-span-4">0</th>
        </tr>
        {/* {Payment Options} */}
        <tr className="grid grid-flow-col grid-cols-12  items-center m-0 p-0">
          <th className="col-span-12 text-start pl-6"> Payments</th>
        </tr>
        {paymentData?.map(
          ({ description, cumulativeUpTo, thisMonthTo, thisYearTo }, sl) => (
            <tr className="grid grid-flow-col grid-cols-12 text-center">
              <td className="col-span-1">{sl + 1}</td>
              <td className="col-span-3"> {description}</td>
              <td className="col-span-3">
                <input
                  type="text"
                  value={thisMonthTo}
                  className="w-full outline-none text-center"
                ></input>
              </td>
              <td className="col-span-3">{thisYearTo}</td>
              <td className="col-span-4">{cumulativeUpTo}</td>
            </tr>
          )
        )}
        {/* Payment Sub Total */}
        <tr className="grid grid-flow-col grid-cols-12 p-0">
          <th className="col-span-4">Total Payment</th>
          <th className="col-span-3">0</th>
          <th className="col-span-3">0</th>
          <th className="col-span-4">0</th>
        </tr>

        {/* Closing Balance */}

        {/* Cash Position */}
        <tr className="grid grid-flow-col grid-cols-12 text-center">
          <td className="col-span-1">20</td>
          <td className="col-span-3"> Cash In Hand</td>
          <td className="col-span-3">0</td>
          <td className="col-span-3">0</td>
          <td className="col-span-4">0</td>
        </tr>
        <tr className="grid grid-flow-col grid-cols-12 text-center">
          <td className="col-span-1">19</td>
          <td className="col-span-3"> Cash At Bank</td>
          <td className="col-span-3">0</td>
          <td className="col-span-3">0</td>
          <td className="col-span-4">0</td>
        </tr>
        {/* total Header */}
        <tr className="grid grid-flow-col grid-cols-12 text-center p-0">
          <th className="col-span-4"> Total Cash in Hand & Cash at Bank</th>
          <th className="col-span-3">0</th>
          <th className="col-span-3">0</th>
          <th className="col-span-4">0</th>
        </tr>
        {/* Payment Final Total */}
        <tr className="grid grid-flow-col grid-cols-12 p-0">
          <th className="col-span-4">Total Payment</th>
          <th className="col-span-3">0</th>
          <th className="col-span-3">0</th>
          <th className="col-span-4">0</th>
        </tr>
      </table>
    </div>
  );
}
