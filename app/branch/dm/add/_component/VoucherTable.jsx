import React from 'react';

const VouchersTable = ({ vouchers }) => {
    return (
        <table>
            <thead>
            <tr className={'w-full'}>
                <th>Date</th>
                <th>Voucher Code</th>
                <th>Voucher Type</th>
                <th>Credit Account</th>
                <th>Debit Account</th>
                <th>Amount</th>
                <th>Narration</th>
            </tr>
            </thead>
            <tbody>
            {vouchers?.map((voucher, index) => (
                <tr key={index}>
                    <td>{voucher.date}</td>
                    <td>{voucher.voucherCode}</td>
                    <td>{voucher.voucherType}</td>
                    <td>{voucher.creditAccounts}</td>
                    <td>{voucher.debitAccounts}</td>
                    <td>{voucher.amount}</td>
                    <td>{voucher.narration}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default VouchersTable;
