import { receiptVariables } from "@components/utils/TableData";
import getThisYear, {
  formatReportingMonth,
  formatReportingDate,
} from "@components/utils/formateDate";
import React from "react";

export default function Receipt({ data, thisYearData, cumulativeData }) {
  console.log(thisYearData);
  const { receiptData, reportingMonth } = data || {};
  const { ThisYearReceiptData: thisYearReceiptData } = thisYearData || {};
  const { ThisYearReceiptData: cumulativeReceiptData } = cumulativeData || {};

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
      <td>{variable}</td>
      <td>{receiptData?.[variable]}</td>
      <td>{thisYearReceiptData?.[variable]}</td>
      <td>{cumulativeReceiptData?.[variable]}</td>
    </tr>
  ));

  return (
    <div className="text-center overflow-scroll">
      <table className="w-full rpTable">
        <tbody>
          {/* Header */}
          <tr>
            <td colSpan={4} className="font-bold text-xl">
              Financial Statement{" "}
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
    </div>
  );
}
// return (
//   <div className="text-center overflow-scroll">
//     <table className="w-full rpTable">
//       <tbody>
//         {/* // headers contents */}
// <tr>
//   <td colSpan={4} className="font-bold text-xl">
//     Financial Statement{" "}
//   </td>
// </tr>
// <tr>
//   <td colSpan={4}>Palli Mongal Karmosuchi (PMK)</td>
// </tr>
// <tr>
//   <td colSpan={4}>
//     {" "}
//     Health Receipts &amp; Payments A/C -{reportingMonth?.slice(0, 4)}
//   </td>
// </tr>
// <tr className="">
//           <td colSpan={1}>This Month Receipts-{reportingDate}</td>
//           <td colSpan={3}>Branch Name: {}</td>
//         </tr>
//         <tr className="bg-green-300">
//           <th>PARTICULARS</th>
//           <th>
//             This Month <br /> {reportingDateRange}
//           </th>
//           <th>
//             This year <br /> {reportingThisYearDateRange.start} to{" "}
//             {reportingThisYearDateRange.end}
//           </th>
//           <th>Cumulative</th>
//         </tr>
//         {/* //table of contents */}
//         <tr className="bg-gray-400">
//           <td>Opening Blance</td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>Cash in hand</td>
//           <td> {Cash_in_Hand} </td>
//           <td> 400 </td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>Cash at Bank</td>
//           <td> {Cash_at_Bank} </td>
//           <td> 115,264 </td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>Advance A/C</td>
//           <td>{Advance_A_C}</td>
//           <td></td>
//           <td> 82,000 </td>
//         </tr>
//         <tr>
//           <td>Medicine A/c 80%</td>
//           <td>{Medicine_A_C}</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>Optic (Glass) 60Tk</td>
//           <td>{Optic_Glass}</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>Diabetes Steep- (7.43Tk)</td>
//           <td>{Diabetes_Steep_743Tk}</td>
//           <td></td>
//           <td> 974 </td>
//         </tr>
//         <tr>
//           <td>Grant A/C </td>
//           <td>{Grant_A_C}</td>
//           <td> 100,000 </td>
//           <td> 800,000 </td>
//         </tr>
//         <tr>
//           <td>SWF</td>
//           <td>{SWF}</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>Staff Scecurity</td>
//           <td>{Staff_Scecurity}</td>
//           <td></td>
//           <td>12000</td>
//         </tr>
//         <tr>
//           <td>FDR A/C</td>
//           <td>{FDR_A_C}</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>FDR Interast A/C</td>
//           <td>{FDR_Interast_A_C}</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr className="bg-gray-400">
//           <td>Health Card Sale A/C</td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td> Dhanmondi</td>
//           <td> {Health_Card_Sale_A_C} </td>
//           <td> 193,200 </td>
//           <td> 650,200 </td>
//         </tr>
//         <tr className="bg-gray-400">
//           <td>EYE PROGRAM </td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>Registration Fee</td>
//           <td>{Registration_Fee}</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>Profit of Optic (Glass) 140Tk</td>
//           <td>{Profit_of_Optic_Glass}</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>Profit of Medicine sale 20%</td>
//           <td>{Profit_of_Medicine_sale}</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>Eye Test (Investigation )</td>
//           <td>{Eye_Test_Investigation}</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr className="bg-gray-400">
//           <td>Consumer Program</td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>Stock of Goods Singer (Purchase value)</td>
//           <td>{Stock_of_Goods_Singer_Purchase_value}</td>
//           <td> 99,571 </td>
//           <td> 122,849 </td>
//         </tr>
//         <tr>
//           <td>Service Charge of Singer</td>
//           <td>{Service_Charge_of_Singer}</td>
//           <td> 14,399 </td>
//           <td> 23,954 </td>
//         </tr>
//         <tr>
//           <td>Stock of Goods Walton (Purchase value)</td>
//           <td>{Stock_of_Goods_Walton_Purchase_value}</td>
//           <td> 21,400 </td>
//           <td> 21,400 </td>
//         </tr>
//         <tr>
//           <td>Service Charge of Walton</td>
//           <td>{Service_Charge_of_Walton}</td>
//           <td> 6,500 </td>
//           <td> 6,500 </td>
//         </tr>
//         <tr className="bg-gray-400">
//           <td>Others</td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>Bank Interest A/C</td>
//           <td>{Bank_Interest_A_C}</td>
//           <td> 2,446 </td>
//           <td>8827</td>
//         </tr>
//         <tr>
//           <td>Telemedicine Fee A/C</td>
//           <td>{Telemedicine_Fee_A_C}</td>
//           <td>1200</td>
//           <td>1200</td>
//         </tr>
//         <tr>
//           <td>Advise Fee A/C</td>
//           <td>{Advise_Fee_A_C}</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>Misc. Income A/C</td>
//           <td>{Misc_Income_A_C}</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>Profit of Diabetes test (17.57TK)</td>
//           <td>{Profit_of_Diabetes_test_1757TK}</td>
//           <td></td>
//           <td> 20,851 </td>
//         </tr>
//         <tr>
//           <td>Pregnancy Test</td>
//           <td>{Pregnancy_Test}</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>Nebulization</td>
//           <td>{Nebulization}</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>Patient Visit Fee</td>
//           <td>{Patient_Visit_Fee}</td>
//           <td></td>
//           <td> 500 </td>
//         </tr>
//         <tr>
//           <td>Ray Therapy</td>
//           <td>{Ray_Therapy}</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>Traning Fee income</td>
//           <td>{Traning_Fee_income}</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>Dressing Fee</td>
//           <td>{Dressing_Fee}</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>Blood Grupping</td>
//           <td>{Blood_Grupping}</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>Doctors Fee</td>
//           <td>{Doctors_Fee}</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr className="bg-gray-400">
//           <td>Grant Total</td>
//           <td>
//             {receiptData &&
//               Object.values(receiptData).reduce((prev, acc) => prev + acc, 0)}
//           </td>
//           <td> 554,380 </td>
//           <td> 1,751,255 </td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );
