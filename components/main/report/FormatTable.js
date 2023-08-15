import React from "react";
import { useForm } from "react-hook-form";
export default function FormatTable({ tableRef }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      Medicine_A_C: "100",
      opticGlass: "Initial Optic (Glass) Value",
      // ... Add initial values for other fields here
    },
  });
  const onSubmit = (data) => {
    console.log(data); // You can replace this with your form submission logic
  };
  //   <input type="text" {...register('medicineAccount')} />
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <table class="grid gap-0 m-0 p-0" ref={tableRef}>
        <thead>
          <tr class="grid grid-flow-col grid-cols-12 p-0">
            <th class="col-span-1">SL No</th>
            <th class="col-span-3"> Description</th>
            <th class="col-span-3">
              this Month : ( 2022-07-01 To2022-07-01 ){" "}
            </th>
            <th class="col-span-3">this Year : (2022-07-01 To2022-07-01 )</th>
            <th class="col-span-4">
              Cumulative : Up To (2022-07-01 to 2022-07-01)
            </th>
          </tr>
        </thead>
        <tr class="grid grid-flow-col grid-cols-12  items-center m-0 p-0">
          <th class="col-span-12 text-start pl-6"> Opening Balance</th>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">1</td>
          <td class="col-span-3"> Cash In Hand</td>
          <td class="col-span-3">0</td>
          <td class="col-span-3">0</td>
          <td class="col-span-4"></td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">2</td>
          <td class="col-span-3"> Cash At Bank</td>
          <td class="col-span-3">0</td>
          <td class="col-span-3">0</td>
          <td class="col-span-4"></td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center p-0">
          <th class="col-span-4"> Total Cash in Hand &amp; Cash at Bank</th>
          <th class="col-span-3">0</th>
          <th class="col-span-3">0</th>
          <th class="col-span-4"></th>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">3</td>
          <td class="col-span-3"> Medicine A/C</td>
          <td class="col-span-3">
            <input
              type="number"
              class="w-full outline-none text-center"
              {...register("Medicine_A_C")}
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">4</td>
          <td class="col-span-3"> Optic (Glass)</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">5</td>
          <td class="col-span-3"> Grant A/C</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">6</td>
          <td class="col-span-3"> Staff Security</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">7</td>
          <td class="col-span-3"> Health Card Sale A/C</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">8</td>
          <td class="col-span-3"> Registration Fee</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">9</td>
          <td class="col-span-3"> Profit of Optic (Glass)</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">10</td>
          <td class="col-span-3"> Profit of Medicine Sale</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">11</td>
          <td class="col-span-3"> Test-Investigation A/C</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">12</td>
          <td class="col-span-3"> Service Charge of Singer</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">13</td>
          <td class="col-span-3"> Stock of Goods-Singer</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">14</td>
          <td class="col-span-3"> Telemedicine Fee</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">15</td>
          <td class="col-span-3"> Advise Fee A/C</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">16</td>
          <td class="col-span-3"> Profit-Diabetes Test</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">17</td>
          <td class="col-span-3"> Ray Therapy</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">18</td>
          <td class="col-span-3"> Advance A/C</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">19</td>
          <td class="col-span-3"> Blood Groupping</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">20</td>
          <td class="col-span-3"> Stock of Goods-Walton</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">21</td>
          <td class="col-span-3"> Service Charge of Walton</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 p-0">
          <th class="col-span-4">Total Receipts</th>
          <th class="col-span-3">0</th>
          <th class="col-span-3">0</th>
          <th class="col-span-4">0</th>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12  items-center m-0 p-0">
          <th class="col-span-12 text-start pl-6"> Payments</th>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">1</td>
          <td class="col-span-3"> Advance A/C</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">2</td>
          <td class="col-span-3"> Diabetes Test Steeps</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">3</td>
          <td class="col-span-3"> Grant A/C</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">4</td>
          <td class="col-span-3"> Staff Security</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">5</td>
          <td class="col-span-3"> Salary &amp; Allowance A/C</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">6</td>
          <td class="col-span-3"> Travelling &amp; Conveyance A/C</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">7</td>
          <td class="col-span-3"> Office Maintenance A/C</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">8</td>
          <td class="col-span-3"> Entertainment A/C</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">9</td>
          <td class="col-span-3"> Mobile &amp; Telephone Bill A/C</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">10</td>
          <td class="col-span-3"> Camp Arrangement Fee</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">11</td>
          <td class="col-span-3"> Stock of Goods-Singer</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">12</td>
          <td class="col-span-3"> Commission of Singer</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">13</td>
          <td class="col-span-3"> Optic (Glass)</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">14</td>
          <td class="col-span-3"> Commission of Walton</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">15</td>
          <td class="col-span-3"> Stock of Goods-Walton</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">16</td>
          <td class="col-span-3"> Bank Charge &amp; Commission A/C</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">17</td>
          <td class="col-span-3"> Service Charge paid Head Office</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">18</td>
          <td class="col-span-3"> Printing &amp; Stationary A/C</td>
          <td class="col-span-3">
            <input
              class="w-full outline-none text-center"
              type="text"
              value="0"
            />
          </td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 p-0">
          <th class="col-span-4">Total Payment</th>
          <th class="col-span-3">0</th>
          <th class="col-span-3">0</th>
          <th class="col-span-4">0</th>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">20</td>
          <td class="col-span-3"> Cash In Hand</td>
          <td class="col-span-3">0</td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center">
          <td class="col-span-1">19</td>
          <td class="col-span-3"> Cash At Bank</td>
          <td class="col-span-3">0</td>
          <td class="col-span-3">0</td>
          <td class="col-span-4">0</td>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 text-center p-0">
          <th class="col-span-4"> Total Cash in Hand &amp; Cash at Bank</th>
          <th class="col-span-3">0</th>
          <th class="col-span-3">0</th>
          <th class="col-span-4">0</th>
        </tr>
        <tr class="grid grid-flow-col grid-cols-12 p-0">
          <th class="col-span-4">Total Payment</th>
          <th class="col-span-3">0</th>
          <th class="col-span-3">0</th>
          <th class="col-span-4">0</th>
        </tr>
        <button type="submit" className="mb-36 btn">
          Submit
        </button>
      </table>
    </form>
  );
}
