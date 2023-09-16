import {
  PaymentTableData,
  getLabelName,
  paymentVariables,
} from "@components/utils/TableData";
import getThisYear, {
  formatReportingDate,
  formatReportingMonth,
} from "@components/utils/formateDate";
import React, { useRef } from "react";
import { BsPrinter } from "react-icons/bs";

export default function Payment({ data, thisYearData, cumulativeData }) {
  const { paymentData, reportingMonth } = data || {};
  const { ThisYearPaymentData: thisYearPaymentData } = thisYearData || {};
  const { ThisYearPaymentData: cumulativePaymentData } = cumulativeData || {};
  const tableRef = useRef(null);
  const handlePrint = () => {
    const printWindow = window.open();
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Table</title>
          <style>
          table {
            border-collapse: collapse;
            width: 100%;
            text-align: center;
          }
          table tr td,table tr th{
            border: 1px solid black;
            padding:  0.1em;
          }
          
          </style>
        </head>
        <body>
          
          ${tableRef.current.outerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
  };

  // console.log(thisYearPaymentData);
  // console.log(formatDate(reportingMonth));
  const reportingDate = formatReportingMonth(reportingMonth);
  const reportingDateRange = formatReportingDate(reportingMonth);
  const reportingThisYearDateRange = getThisYear(reportingMonth);
  const getTotal = (data) => {
    return Object.values(data).reduce((prev, acc) => prev + acc, 0);
  };
  const tableRows = paymentVariables.map((variable) => (
    <tr key={variable}>
      <td>{getLabelName(variable)}</td>
      <td>{paymentData?.[variable]}</td>
      <td>{thisYearPaymentData?.[variable]}</td>
      <td>{cumulativePaymentData?.[variable]}</td>
    </tr>
  ));
  return (
    <div className="text-center overflow-scroll">
      <table className="w-full rpTable" ref={tableRef}>
        <tbody>
          <tr>
            <td colSpan={4} className="font-bold text-xl">
              <h1> Financial Statement </h1>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>Palli Mongal Karmosuchi (PMK)</td>
          </tr>
          <tr>
            <td colSpan={4}>
              Health payments &amp; Payments A/C -{reportingMonth?.slice(0, 4)}
            </td>
          </tr>
          <tr>
            <td colSpan={1}>This Month Payments-{reportingDate}</td>
            <td colSpan={3}>Branch Name: {}</td>
          </tr>
          <tr className="bg-green-300">
            <th>PARTICULAR</th>
            <th>
              This Month
              <br /> {reportingDateRange}
            </th>
            <th>
              This Year <br /> {reportingThisYearDateRange.start} to{" "}
              {reportingThisYearDateRange.end}
            </th>
            <th>Cumulative</th>
          </tr>
          {tableRows}
          <tr className="bg-gray-400">
            <td>Grant Total</td>
            <td>{paymentData && getTotal(paymentData)}</td>
            <td> {thisYearPaymentData && getTotal(thisYearPaymentData)}</td>
            <td>{cumulativePaymentData && getTotal(cumulativePaymentData)} </td>
          </tr>
        </tbody>
      </table>
      <button
        className="btn flex justify-center items-center gap-3 bg-green-100"
        onClick={handlePrint}
      >
        <BsPrinter /> Print
      </button>
    </div>
  );
}
