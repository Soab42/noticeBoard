'use client'
import "../form.css";
import { useState } from "react";
import VouchersTable from "@app/branch/dm/add/_component/VoucherTable";
let date = new Date();
let year = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, '0');
let day = String(date.getDate()).padStart(2, '0');

let formattedDate = `${year}-${month}-${day}`;

const Accounts=[
    {
        name: 'Cash At Bank',
        code:108
    },
    {
        name: 'Accounts Receivable',
        code:101
    },
    {
        name: 'Stock of Goods Singer',
        code:102
    },
    {
        name: 'Stock of Goods Walton',
        code:103
    },
    {
        name: 'Service Charge of Singer',
        code:104
    },
    {
        name: 'Service Charge of Walton',
        code:105
    },
    {
        name: 'Commission of Singer',
        code:106
    },
    {
        name: 'Commission of Walton',
        code:107
    },

]
export default function Voucher({ params: { voucher } }) {
    const [formData, setFormData] = useState({
        date: formattedDate,
        voucherCode: voucher,
        voucherType: voucher,
        creditAccounts: voucher == 'payment' ? 108 : "",
        debitAccounts: voucher == 'recipt' ? 108 : "",
        amount: "",
        narration: "",
    });
    const [vouchers, setVouchers] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // await addDoc(collection(db, "vouchers"), {
            //     date: formData.date,
            //     voucherCode: formData.voucherCode,
            //     voucherType: formData.voucherType,
            //     creditAccounts: formData.creditAccounts,
            //     debitAccounts: formData.debitAccounts,
            //     amount: formData.amount,
            //     narration: formData.narration,
            // });
            setVouchers(prevState => [...prevState, formData]);
            setFormData({
                date: formattedDate,
                voucherCode: voucher,
                voucherType: voucher,
                creditAccounts: voucher == 'payment' ? 108 : "",
                debitAccounts: voucher == 'payment' ? 108 : "",
                amount: "",
                narration: "",
            })

        } catch (error) {
            console.error("Error adding voucher: ", error);
            // alert("Failed to add voucher.");
        }
    };

    return (
        <div>
            <p className={'capitalize'}>
                {voucher} Voucher
            </p>
            <form className={'addform flex gap-4 flex-wrap'} onSubmit={handleSubmit}>
                <label>
                    <p>Date</p>
                    <input type={'date'} name="date" value={formData.date} onChange={handleChange} required/>
                </label>
                <label className={'none'}>
                    <p>Voucher Code</p>
                    <input type={'text'} name="voucherCode" value={formData.voucherCode} onChange={handleChange} required/>
                </label>
                <label className={'none'}>
                    <p>Voucher Type</p>
                    <input type={'text'} name="voucherType" value={formData.voucherType} onChange={handleChange} required/>
                </label>
                <label>
                    <p>Credit Accounts</p>
                    <select
                        name="creditAccounts"
                        value={formData.creditAccounts}
                        onChange={handleChange}
                        required
                        disabled={voucher === 'payment' }
                    >
                        <option>Select An option</option>
                        {Accounts.map(account => (
                            <option
                                value={account.code}
                                key={account.code}
                            >
                                {account.name}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    <p>Debit Accounts</p>
                    <select
                        name="debitAccounts"
                        value={formData.debitAccounts}
                        onChange={handleChange}
                        required
                        disabled={voucher === 'recipt'}
                    >
                        <option>Select An option</option>
                        {Accounts.map(account => (
                            <option
                                value={account.code}
                                key={account.code}
                            >
                                {account.name}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    <p>Amount</p>
                    <input type={'number'} name="amount" value={formData.amount} onChange={handleChange} required/>
                </label>
                <label>
                    <p>Narration</p>
                    <input type={'text'} name="narration" value={formData.narration} onChange={handleChange} required/>
                </label>
                <div className={'w-full mt-2 text-xl'}>
                    <button className={'add'} type="submit">Add</button>
                </div>
            </form>

              <VouchersTable key={voucher.id} vouchers={vouchers} />

        </div>
    );
}
