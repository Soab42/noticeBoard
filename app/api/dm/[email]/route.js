import admin from "@firebase";
import {NextResponse} from "@node_modules/next/server";

export async function GET(request, { params }){
    console.log(params.email);
    const db = admin.database();
    const dataRef = db.ref(
        `/dm/day`
    );
    const snapshot = await dataRef.once("value");
    const res = snapshot.val();
    // console.log(res);
    const data= res.find(item=>item.code == params?.email.slice(0,3));
    return NextResponse.json(data);}
