"use client";

import React, { useEffect, useState } from "react";

export default function LoanPage() {
  const [loanData, setLoanData] = useState([]);

  useEffect(() => {
    async function fetchLoanData() {
      try {
        const response = await fetch("/api/test"); // Use the correct API route URL
        const data = await response.json();
        setLoanData(data);
      } catch (error) {
        console.error("Error fetching loan data:", error);
      }
    }

    fetchLoanData();
  }, []);
  console.log(loanData);
  return (
    <div>
      <h1>Loan Details</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Installment</th>
            <th>Principle</th>
            <th>Interest</th>
            <th>Closing Outstanding</th>
          </tr>
        </thead>
        <tbody>
          {loanData.map((loan, index) => (
            <tr key={index}>
              <td>{loan.date}</td>
              <td>{loan.installment}</td>
              <td>{loan.principle}</td>
              <td>{loan.interest}</td>
              <td>{loan.closingOutstanding}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
