import React, { useEffect, useState } from "react";

export default function RForm() {
  const [reciptData, setReciptData] = useState({});
  const [allData, setAllData] = useState([]);

  const handleChange = (e) => {
    setReciptData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = () => {
    console.log(reciptData);
  };

  return (
    <div className="w-full">
      <form action="" className="flex flex-col p-2 w-full text-sm">
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between  bg-slate-400">
          Opening Blance
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Cash in hand</p>
          <input
            onWheel={(e) => e.target.blur()}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 "
            type="number"
            name="Cash_in_Hand"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Cash at Bank</p>
          <input
            onWheel={(e) => e.target.blur}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Cash_at_Bank"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Advance A/C</p>
          <input
            onWheel={(e) => e.target.blur}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Advance_A_C"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Medicine A/c 80%</p>
          <input
            onWheel={(e) => e.target.blur}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Medicine_A_C"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Optic (Glass) 60Tk</p>
          <input
            onWheel={(e) => e.target.blur}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Optic_(Glass)"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Diabetes Steep- (7.43Tk)</p>
          <input
            onWheel={(e) => e.target.blur}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Diabetes_Steep-743Tk"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Grant A/C</p>
          <input
            onWheel={(e) => e.target.blur}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Grant_A_C"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">SWF</p>
          <input
            onWheel={(e) => e.target.blur}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="SWF"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Staff Scecurity</p>
          <input
            onWheel={(e) => e.target.blur}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Staff_Scecurity"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">FDR A/C</p>
          <input
            onWheel={(e) => e.target.blur}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="FDR_A_C"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">FDR Interast A/C</p>
          <input
            onWheel={(e) => e.target.blur}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="FDR_Interast_A_C"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between  bg-slate-400">
          Health Card Sale
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Health Card Sale A/C</p>
          <input
            onWheel={(e) => e.target.blur}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Health_Card_Sale_A_C"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between  bg-slate-400">
          EYE PROGRAM
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Registration Fee</p>
          <input
            onWheel={(e) => e.target.blur}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Registration_Fee"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Profit of Optic (Glass) 140Tk</p>
          <input
            onWheel={(e) => e.target.blur}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Profit_of_Optic_Glass"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Profit of Medicine sale 20%</p>
          <input
            onWheel={(e) => e.target.blur()}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Profit_of_Medicine_sale"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Eye Test (Investigation)</p>
          <input
            onWheel={(e) => e.target.blur()}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Eye_Test_Investigation"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between  bg-slate-400">
          Consumer Program
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">
            Stock of Goods Singer (Purchase value)
          </p>
          <input
            onWheel={(e) => e.target.blur()}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Stock_of_Goods_Singer_Purchase_value"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Service Charge of Singer</p>
          <input
            onWheel={(e) => e.target.blur()}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Service_Charge_of_Singer"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">
            Stock of Goods Walton (Purchase value)
          </p>
          <input
            onWheel={(e) => e.target.blur()}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Stock_of_Goods_Walton_Purchase_value"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Service Charge of Walton</p>
          <input
            onWheel={(e) => e.target.blur()}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Service_Charge_of_Walton"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between  bg-slate-400">
          Others
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Bank Interest A/C</p>
          <input
            onWheel={(e) => e.target.blur()}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Bank_Interest_A_C"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Telemedicine Fee A/C</p>
          <input
            onWheel={(e) => e.target.blur()}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Telemedicine_Fee_A_C"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Advise Fee A/C</p>
          <input
            onWheel={(e) => e.target.blur()}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Advise_Fee_A_C"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Misc. Income A/C</p>
          <input
            onWheel={(e) => e.target.blur()}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Misc_Income_A_C"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">
            Profit of Diabetes test (17.57TK)
          </p>
          <input
            onWheel={(e) => e.target.blur()}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Profit_of_Diabetes_test_1757TK"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Pregnancy Test</p>
          <input
            onWheel={(e) => e.target.blur()}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Pregnancy_Test"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Nebulization</p>
          <input
            onWheel={(e) => e.target.blur()}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Nebulization"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Patient Visit Fee</p>
          <input
            onWheel={(e) => e.target.blur()}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Patient_Visit_Fee"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Ray Therapy</p>
          <input
            onWheel={(e) => e.target.blur()}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Ray_Therapy"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Traning Fee income</p>
          <input
            onWheel={(e) => e.target.blur()}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Traning_Fee_income"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Dressing Fee</p>
          <input
            onWheel={(e) => e.target.blur()}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Dressing_Fee"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Blood Grupping</p>
          <input
            onWheel={(e) => e.target.blur()}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Blood_Grupping"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between ">
          <p className="w-1/2 min-w-[6rem]">Doctors Fee</p>
          <input
            onWheel={(e) => e.target.blur()}
            className="text-center outline-none ring-1 w-1/2 min-w-[6rem] h-7 ml-1"
            type="number"
            name="Doctors_Fee"
            id=""
            onChange={handleChange}
          />
        </label>
        <label className="ring-1 p-1 w-auto min-w-[25rem] flex justify-between  bg-slate-400">
          Grant Total
        </label>
      </form>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
