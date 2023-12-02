"use client";
import React, { useEffect, useState } from "react";

export default function Particulars({ name }) {
  const [additional, setAdditional] = useState(0);
  const [balance, setBalance] = useState(0);
  const [writeDownValue, setWriteDownValue] = useState(0);
  const [depreciationThisYear, setDepreciationThisYear] = useState(0);
  const [cumulativeDepreciation, setCumulativeDepreciation] = useState(0);
  const [bookValue, setBookValue] = useState(0);
  const rate = getRate(name);
  useEffect(() => {
    function getData() {
      const depreciation = balance;
      const cumDepreciation = depreciation + writeDownValue;
      const boookvalue = balance - cumulativeDepreciation;
      setDepreciationThisYear(depreciation);
      setCumulativeDepreciation(cumDepreciation);
      setBookValue(boookvalue);
    }
    getData();
  }, [additional, balance, writeDownValue]);
  console.log("additional", additional);
  console.log("balance", balance);
  console.log("writeDownValue", writeDownValue);
  console.log("depreciationThisYear", depreciationThisYear);
  console.log("bookValue", bookValue);
  console.log("rate", rate);
  return (
    <tr className="tableRow">
      <td className="td">{name}</td>
      <td className="td">
        <input
          className="inputDep"
          type="number"
          name="additional"
          id="additional"
          value={additional}
          onChange={(e) => setAdditional(e.target.value)}
        />
      </td>
      <td className="td">
        <input
          className="inputDep"
          type="number"
          name="balance"
          id="balance"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
      </td>
      <td className="td">
        <input
          className="inputDep"
          type="number"
          name="writeDownValue"
          id="writeDownValue"
          value={writeDownValue}
          onChange={(e) => setWriteDownValue(e.target.value)}
        />
      </td>
      <td className="td">
        <input
          className="inputDep"
          type="number"
          name="depreciationThisYear"
          id="depreciationThisYear"
          value={depreciationThisYear}
          readOnly
        />
      </td>
      <td className="td">
        <input
          className="inputDep"
          type="number"
          name="cumulativeDepreciation"
          id="cumulativeDepreciation"
          value={cumulativeDepreciation}
          readOnly
        />
      </td>
      <td className="td">
        <input
          className="inputDep"
          type="number"
          name="bookValue"
          id="bookValue"
          value={bookValue}
          readOnly
        />
      </td>
    </tr>
  );
}

function getRate(name) {
  if (name == "Building") {
    return 15;
  } else if (name == "Computer") {
    return 20;
  } else if (name == "Furniture & Fixture") {
    return 10;
  } else if (name == "Office Equipment & Electronics") {
    return 20;
  }
}
