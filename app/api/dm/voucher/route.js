
import admin, { Auth } from "@firebase";
import { NextResponse } from "next/server";
import {getBaseUrl} from "@features/api/apiSlice";
// Get a reference to the Firebase Realtime Database

export async function GET(request) {
    const customHeader = request.headers.get('x-user-email');
    const res = await fetch(`${getBaseUrl()}/dm/${customHeader}`);
    const branchData = await res.json(); // Assuming the API returns JSON data

    const db = admin.database();
    const dataRefR = db.ref(
        `/dm/recipt`
    );
    const dataRefP = db.ref(
        `/dm/payment`
    );
    const snapshotR = await dataRefR.once("value");
    const snapshotP = await dataRefP.once("value");
    const rData = snapshotR.val();
    const pData = snapshotP.val();
    const VoucherList= [getTotalValueOfVoucher(rData), getTotalValueOfVoucher(pData)]

    // console.log(rData);
    return NextResponse.json(VoucherList);
    // }
    // return NextResponse.json({ massage: "you are not authenticated baby" });
}


function getTotalValueOfVoucher(rData) {
    const voucherTotals = Object.values(rData).reduce((acc, voucher) => {
        const code = voucher.voucherCode;
        const amount = parseFloat(voucher.amount);
        ;        if (!acc['amount']) {
            acc['amount'] = 0;
        }
        acc['amount'] += amount;
        acc['voucherType'] = voucher.voucherType;
        acc['voucherDate'] = voucher.date;
        acc['voucherCode'] = voucher.voucherCode;
        acc['branchName'] = voucher.branch;
        return acc;
    }, {});

return voucherTotals;
}