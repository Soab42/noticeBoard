"use client";
import React, { useState } from "react";
// import { effect, signal, useSignal } from "@preact/signals-react";

export default function page() {
  //   const interest1 = signal(10);
  const [interest1, setInterest1] = useState(
    "Fill The Form And Submit To Calculation"
  );
  const [month, setMonth] = useState(0);
  //   console.log(interest1.value);

  const handleSubmit = (e) => {
    // e.preventDefault();
    e.preventDefault();

    // Fetch form data
    const openingBalance = e.target.elements.openingBalance.value;
    const closingBalance = e.target.elements.closingBalance.value;
    const startingDate = e.target.elements.startingDate.value;
    const closingDate = e.target.elements.closingDate.value;

    // Perform your interest calculation logic here
    const monthDifference = calculateMonthDifference(startingDate, closingDate);
    setMonth(monthDifference);
    if (monthDifference < 11 && monthDifference > 0) {
      setInterest1("Sorry, you have to mature at list 12 month!");
    } else if (monthDifference > 60) {
      // For now, let's assume a simple interest calculation
      const interest =
        ((parseFloat(closingBalance) - parseFloat(openingBalance)) / 2) *
        0.00583 *
        monthDifference;
      setInterest1(interest);
    } else if (monthDifference > 12) {
      // For now, let's assume a simple interest calculation
      const interest =
        ((parseFloat(closingBalance) - parseFloat(openingBalance)) / 2) *
        0.00417 *
        monthDifference;
      setInterest1(interest);
    } else {
      setInterest1("Sorry, give Correct Information!");
    }
  };
  //   effect(() => console.log(interest1.value));

  console.log(typeof interest1 == "number");

  return (
    <div className="">
      <title>msp interest Calculation</title>
      <div className="h-10 uppercase rounded-b-full text-center  shadow-lg shadow-rose-700/60 text-sky-600 text-2xl">
        Msp Interest Calculation
      </div>

      <main className="flex flex-col gap-4 mt-5 p-4 text-justify h-[78vh] overflow-scroll pb-56">
        <div className="firstMethod flex flex-col">
          <p className="text-xl bg-pink-700/60  rounded-md text-center">
            first method
          </p>
          <form
            className="flex flex-col w-full gap-4 px-2 border-x-[1px] border-pink-700/60 p-2"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-2 justify-between">
              <label
                className="flex w-full justify-between"
                htmlFor="openingBalance"
              >
                Opening Balance{" "}
                <input
                  className="w-40 bg-inherit ring-1 outline-none text-center"
                  type="text"
                  name="openingBalance"
                  id="openingBalance"
                />
              </label>

              <label
                className="flex w-full justify-between"
                htmlFor="openingBalance"
              >
                Closing Balance{" "}
                <input
                  className="w-40 bg-inherit ring-1 outline-none text-center"
                  type="text"
                  name="closingBalance"
                  id="closingBalance"
                />
              </label>
            </div>
            <div className="flex gap-2 justify-between">
              <label
                className="flex w-full justify-between"
                htmlFor="openingBalance"
              >
                Opening Date{" "}
                <input
                  className="w-40 bg-inherit ring-1 outline-none text-center"
                  type="date"
                  name="startingDate"
                  id="startingDate"
                  //   value={getCurrentDate()}
                />
              </label>

              <label
                className="flex w-full justify-between"
                htmlFor="openingBalance"
              >
                Closing date
                <input
                  className="w-40 bg-inherit ring-1 outline-none text-center"
                  type="date"
                  name="closingDate"
                  id="closingDate"
                  //   value={getCurrentDate()}
                />
              </label>
            </div>
            <div className="flex justify-center bg-black/20  w-full">
              <button className="bg-green-300 text-black w-44 rounded-md">
                Calculation
              </button>
            </div>
          </form>
          <div className="text-xl w-full bg-pink-700/60 rounded-md text-center p-1 flex justify-evenly">
            {typeof interest1 == "number" && (
              <div className="flex gap-2">
                Calculated Month:
                <span className="text-bold text-green-400">{month}</span>{" "}
              </div>
            )}
            <div>
              {typeof interest1 == "number" && <span>Interest Amount: </span>}
              <span className="text-bold text-green-400">{interest1}</span>
            </div>
            {typeof interest1 == "number" && (
              <div className="flex gap-2">
                Calculated Rate:
                <span className="text-bold text-green-400">
                  {month > 60 ? "7%" : "5%"}
                </span>{" "}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function calculateMonthDifference(startingDate, closingDate) {
  const startDate = new Date(startingDate);
  const endDate = new Date(closingDate);

  // Calculate the difference in months
  const monthDifference =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  return Number(monthDifference);
}
function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
  const day = today.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}
