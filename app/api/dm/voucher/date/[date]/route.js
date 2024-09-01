
import admin, { Auth } from "@firebase";
import { NextResponse } from "next/server";
import {getBaseUrl} from "@features/api/apiSlice";
// Get a reference to the Firebase Realtime Database

export async function GET(request,{params}) {
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
    const VoucherList= [...Object.values(rData), ...Object.values(pData)];
    const data= VoucherList.filter((item) => item.date === params.date);
    // console.log(rData);
    return NextResponse.json(data);
    // }
    // return NextResponse.json({ massage: "you are not authenticated baby" });
}
