import {
  formatReportingMonth,
  formatReportingDate,
} from "@components/utils/formateDate";
import React from "react";

export default function Receipt({ data }) {
  const { receiptData, reportingMonth } = data || {};
  console.log(receiptData);
  // console.log(formatDate(reportingMonth));
  const reportingDate = formatReportingMonth(reportingMonth);
  const reportingDateRange = formatReportingDate(reportingMonth);
  return (
    <div className="text-center overflow-scroll">
      <table className="w-full rpTable">
        <tbody>
          {/* // headers contents */}
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
              {" "}
              Health Receipts &amp; Payments A/C -{reportingMonth?.slice(0, 4)}
            </td>
          </tr>
          <tr className="">
            <td colSpan={1}>This Month Receipts-{reportingDate}</td>
            <td colSpan={3}>Branch Name: {}</td>
          </tr>
          <tr className="bg-green-300">
            <th>PARTICULARS</th>
            <th>
              This Month <br /> {reportingDateRange}
            </th>
            <th>
              This year <br /> 01/07/2022 to 30/06/2023
            </th>
            <th>Cumulative</th>
          </tr>
          {/* //table of contents */}
          <tr className="bg-gray-400">
            <td>Opening Blance</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Cash in hand</td>
            <td> - </td>
            <td> 400 </td>
            <td></td>
          </tr>
          <tr>
            <td>Cash at Bank</td>
            <td> 26,921 </td>
            <td> 115,264 </td>
            <td></td>
          </tr>
          <tr>
            <td>Advance A/C</td>
            <td></td>
            <td></td>
            <td> 82,000 </td>
          </tr>
          <tr>
            <td>Medicine A/c 80%</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Optic (Glass) 60Tk</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Diabetes Steep- (7.43Tk)</td>
            <td></td>
            <td></td>
            <td> 974 </td>
          </tr>
          <tr>
            <td>Grant A/C </td>
            <td></td>
            <td> 100,000 </td>
            <td> 800,000 </td>
          </tr>
          <tr>
            <td>SWF</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Staff Scecurity</td>
            <td></td>
            <td></td>
            <td>12000</td>
          </tr>
          <tr>
            <td>FDR A/C</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>FDR Interast A/C</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="bg-gray-400">
            <td>Health Card Sale A/C</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td> Nayabazar-2</td>
            <td> 16,800 </td>
            <td> 193,200 </td>
            <td> 650,200 </td>
          </tr>
          <tr className="bg-gray-400">
            <td>EYE PROGRAM </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Registration Fee</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Profit of Optic (Glass) 140Tk</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Profit of Medicine sale 20%</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Eye Test (Investigation )</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="bg-gray-400">
            <td>Consumer Program</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Stock of Goods Singer (Purchase value)</td>
            <td></td>
            <td> 99,571 </td>
            <td> 122,849 </td>
          </tr>
          <tr>
            <td>Service Charge of Singer</td>
            <td></td>
            <td> 14,399 </td>
            <td> 23,954 </td>
          </tr>
          <tr>
            <td>Stock of Goods Walton (Purchase value)</td>
            <td> - </td>
            <td> 21,400 </td>
            <td> 21,400 </td>
          </tr>
          <tr>
            <td>Service Charge of Walton</td>
            <td> - </td>
            <td> 6,500 </td>
            <td> 6,500 </td>
          </tr>
          <tr className="bg-gray-400">
            <td>Others</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Bank Interest A/C</td>
            <td> 803 </td>
            <td> 2,446 </td>
            <td>8827</td>
          </tr>
          <tr>
            <td>Telemedicine Fee A/C</td>
            <td>400</td>
            <td>1200</td>
            <td>1200</td>
          </tr>
          <tr>
            <td>Advise Fee A/C</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Misc. Income A/C</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Profit of Diabetes test (17.57TK)</td>
            <td></td>
            <td></td>
            <td> 20,851 </td>
          </tr>
          <tr>
            <td>Pregnancy Test</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Nebulization</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Patient Visit Fee</td>
            <td></td>
            <td></td>
            <td> 500 </td>
          </tr>
          <tr>
            <td>Ray Therapy</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Traning Fee income</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Dressing Fee</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Blood Grupping</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Doctors Fee</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="bg-gray-400">
            <td>Grant Total</td>
            <td> 44,924 </td>
            <td> 554,380 </td>
            <td> 1,751,255 </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
