import { useState } from "react";
import {useSelector} from "react-redux";
import {useParams} from "next/navigation";
import {Accounts} from "@app/branch/dm/add/[voucher]/page";

export default function Form({voucher}) {
    const branch =useSelector(state => state?.userDetails);
    const [formData, setFormData] = useState({
        date: branch.day,
        branch: branch.name,
        voucherCode: generateVoucherCode(branch,voucher),
        voucherType: voucher,
        creditAccounts: voucher == 'payment' ? 108 : "",
        debitAccounts: voucher == 'recipt' ? 108 : "",
        amount: "",
        narration: "",
    });
    const params =useParams();
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
            await fetch('http://localhost:3000/api/dm', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Set the correct Content-Type
                },
                body: JSON.stringify(formData),
            });

            setFormData({
                ...formData,
                amount: "",
                narration: "",
            })

        } catch (error) {
            console.error("Error adding voucher: ", error);
            // alert("Failed to add voucher.");
        }
    };

    return (<form className={'addform grid grid-cols-3 gap-4 w-[70vw]'} onSubmit={handleSubmit}>
        <label>
            <p>Date</p>
            <input type={'date'} name="date" value={formData.date} onChange={handleChange} required disabled={'true'}/>
        </label>
        <label className={'none'}>
            <p>Branch</p>
            <input type={'text'} name="branch" value={formData.branch} onChange={handleChange} required/>
        </label>
        <label className={'none'}>
            <p>Voucher Code</p>
            <input type={'text'} name="voucherCode" value={formData.voucherCode} onChange={handleChange}
                   required/>
        </label>
        <label className={'none'}>
            <p>Voucher Type</p>
            <input type={'text'} name="voucherType" value={formData.voucherType} onChange={handleChange}
                   required/>
        </label>
        <label>
            <p>Credit Accounts</p>
            <select
                name="creditAccounts"
                value={formData.creditAccounts}
                onChange={handleChange}
                required
                disabled={voucher === 'payment'}
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
        <label className={'col-span-2'}>
            <p>Narration</p>
            <input type={'text'} name="narration" value={formData.narration} onChange={handleChange} required/>
        </label>
        <div className={'w-full mt-2 text-xl'}>
            <button className={'add'} type="submit">Add</button>
        </div>
    </form>);
}

const generateVoucherCode = (branchDetails,voucher) => {
    // Get the current date and time
    const voucherType=voucher=='payment'? 'PV': 'RV';
    // Format the voucher code
    const voucherCode = `${voucherType}-${branchDetails.code}-${branchDetails.day.replace(/[-:.T]/g, '')}`;

    return voucherCode;
};
