import React from 'react';
import {Accounts} from "@app/branch/dm/add/[voucher]/page";

const VouchersTable = async ({voucherType}) => {
    const data= await fetch(`http://localhost:3000/api/dm/voucher/${voucherType}`);
    const vouchers=[];
    console.log(await data.json());
    if (vouchers.length === 0) {
        return <div>{voucherType}</div>;
    }
    return (
        <table>
            <thead>
            <tr className={'w-full'}>
                <th>Sl</th>
                <th>Date</th>
                <th>Voucher Code</th>
                <th>Credit Account</th>
                <th>Debit Account</th>
                <th>Amount</th>
                <th>Narration</th>
            </tr>
            </thead>
            <tbody>
            {vouchers?.map((voucher, index) => (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{voucher.date}</td>
                    <td>{voucher.voucherCode}</td>
                    <td>{getAccountsName(voucher.creditAccounts)}</td>
                    <td>{getAccountsName(voucher.debitAccounts)}</td>
                    <td>{voucher.amount}</td>
                    <td>{voucher.narration}</td>
                </tr>
            ))}
            </tbody>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Total</th>
                <th>
                    {vouchers.reduce(
                        (accumulator, voucher) => accumulator + Number(voucher.amount),
                        0,
                    )}
                </th>
                <th></th>

            </tr>
        </table>
    );
};

export default VouchersTable;

const getAccountsName=(code)=>{
    const name= Accounts.find(account=>account.code==code);
    return name.name ;
}