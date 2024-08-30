'use client'
import "../form.css";

import Form from "@app/branch/dm/add/_component/Form";
import VouchersTable from "@app/branch/dm/add/_component/VoucherTable";


export const Accounts=[
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
    return (
        <div>
            <p className=" border-b-2 border-amber-200 mb-2 text-center text-xl font-black capitalize w-full">
                {voucher} Voucher
            </p>
            <Form voucher={voucher}/>
            <VouchersTable voucherType={voucher}/>

        </div>
    );
}

