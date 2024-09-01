'use client'
import React, {useEffect, useState} from "react";
import '../add/form.css'
import {getBaseUrl} from "@features/api/apiSlice";
export default function VoucherList() {
  const [VoucherList, setVoucherList] = useState([])
  useEffect(()=>{
    async function fetchVoucherList(){
      const res=await fetch(`${getBaseUrl()}/dm/voucher`);
      const json = await res.json();
      setVoucherList(json);
    }
    fetchVoucherList();
  },[]);
  console.log(VoucherList);
  return (<div className={'w-full'}>
    <h2>Voucher List</h2>
    <table className={'w-full'}>
      <thead>
        <tr>
        <th>Index</th>

        <th>Voucher Code</th>
        <th>Voucher Type</th>
        <th>Voucher Amount</th>
        <th>Date</th>

        <th>Entry By</th>
        <th colSpan={2}>Action</th>
      </tr>
      </thead>
      <tbody>
      {VoucherList.map((voucher, index) => (
          <tr key={index} className={'capitalize'}>
            <td>{index+1}</td>
            <td>{
              voucher.voucherCode
            }</td>
            <td>{voucher.voucherType}</td>
            <td>{voucher.amount}</td>
            <td>{voucher.voucherDate}</td>
            <td>{voucher.branchName}</td>
            <td>
              <button >View</button>
            </td>
            <td >
            <button >Print</button>
            </td>
          </tr>
      ))}

      </tbody>
    </table>
  </div>);
}
