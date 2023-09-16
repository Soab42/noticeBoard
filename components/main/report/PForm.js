import React from "react";
import { PaymentTableData } from "@components/utils/TableData";

export default function RForm({ paymentData, setPaymentData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: Number(value),
    }));
  };

  return (
    <div className="w-full">
      <form action="" className="flex flex-col p-2 w-full text-sm">
        <section className="bg-green-400 h-8 text-xl font-bold text-center ">
          Payment Form
        </section>
        {PaymentTableData.map((group, index) => (
          <div key={index} className="mb-4">
            <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between bg-slate-400">
              {group.label}
            </label>
            {group.items.map((item) => (
              <label
                key={item.name}
                className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between"
              >
                <p className="w-1/2 min-w-[6rem]">{item.label}</p>
                <input
                  onWheel={(e) => e.target.blur()}
                  className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
                  type="number"
                  name={item.name}
                  value={paymentData[item.name] || ""}
                  onChange={handleChange}
                />
              </label>
            ))}
          </div>
        ))}
      </form>
    </div>
  );
}
