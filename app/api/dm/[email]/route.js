import admin from "@firebase";
import {NextResponse} from "@node_modules/next/server";

export async function GET(request, { params }){
    console.log(params.email);
    const db = admin.database();
    const dataRef = db.ref(
        `/dm/day`
    );

    const snapshot1 = await dataRef.orderByChild("code").equalTo(params?.email.slice(0,3)).once("value");
    const data = snapshot1.val();

    return NextResponse.json(data);}

export async function POST(request, { params }){

    const db = admin.database();
    const dataRef = db.ref(
        `/dm/day`
    );
    const snapshot1 = await dataRef.orderByChild("code").equalTo(params?.email.slice(0,3)).once("value");
    const data = snapshot1.val();





    return NextResponse.json(data);}