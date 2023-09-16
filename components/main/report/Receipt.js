import { getLabelName, receiptVariables } from "@components/utils/TableData";
import getThisYear, {
  formatReportingMonth,
  formatReportingDate,
} from "@components/utils/formateDate";
import React, { useRef } from "react";
import { BsPrinter } from "react-icons/bs";

export default function Receipt({ data, thisYearData, cumulativeData }) {
  console.log(thisYearData);
  const { receiptData, reportingMonth } = data || {};
  const { ThisYearReceiptData: thisYearReceiptData } = thisYearData || {};
  const { ThisYearReceiptData: cumulativeReceiptData } = cumulativeData || {};
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

  // console.log(receiptData);
  // console.log(formatDate(reportingMonth));
  const reportingDate = formatReportingMonth(reportingMonth);
  const reportingDateRange = formatReportingDate(reportingMonth);
  const reportingThisYearDateRange = getThisYear(reportingMonth);
  const getTotal = (data) => {
    return Object.values(data).reduce((prev, acc) => prev + acc, 0);
  };
  const tableRows = receiptVariables.map((variable) => (
    <tr key={variable}>
      <td>{getLabelName(variable)}</td>
      <td>{receiptData?.[variable]}</td>
      <td>{thisYearReceiptData?.[variable]}</td>
      <td>{cumulativeReceiptData?.[variable]}</td>
    </tr>
  ));

  return (
    <div className="text-center overflow-scroll">
      <table className="w-full rpTable" ref={tableRef}>
        <tbody>
          {/* Header */}
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
              Health Receipts &amp; Payments A/C -{reportingMonth?.slice(0, 4)}
            </td>
          </tr>
          <tr className="">
            <td colSpan={1}>This Month Receipts-{reportingDate}</td>
            <td colSpan={3}>Branch Name: {}</td>
          </tr>
          {/* ... (other header rows) */}
          <tr className="bg-green-300">
            <th>PARTICULARS</th>
            <th>
              This Month <br /> {reportingDateRange}
            </th>
            <th>
              This Year <br /> {reportingThisYearDateRange.start} to{" "}
              {reportingThisYearDateRange.end}
            </th>
            <th>Cumulative</th>
          </tr>
          {/* Table of contents */}
          <tr className="bg-gray-400">
            <td>Opening Balance</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {tableRows}
          <tr className="bg-gray-400">
            <td>Grant Total</td>
            <td>{receiptData && getTotal(receiptData)}</td>
            <td> {thisYearReceiptData && getTotal(thisYearReceiptData)}</td>
            <td>{cumulativeReceiptData && getTotal(cumulativeReceiptData)} </td>
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
