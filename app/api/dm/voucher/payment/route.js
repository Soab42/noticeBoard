
import admin, { Auth } from "@firebase";
import { NextResponse } from "next/server";
import {getBaseUrl} from "@features/api/apiSlice";
// Get a reference to the Firebase Realtime Database

export async function GET(request) {
    // structure of db "report/rp/2k22-23/june/nayabazarZone/branch/{head/payment/receipt}"
    const Authorization = request.headers.get("Authorization");
    // console.log(request);
    const user = request.cookies.get("user")?.value;
    // console.log('user',user);
    // Read the custom header
    const customHeader = request.headers.get('x-user-email');
    const res = await fetch(`${getBaseUrl()}/dm/${customHeader}`);
    const dayData = await branch.json(); // Assuming the API returns JSON data

    const db = admin.database();
    const dataRef = db.ref(
        `/dm/payment`
    );
    const snapshot = await dataRef.once("value");
    const data = snapshot.val();
    const Values= Object.values(data).filter((item) => item.branch == dayData.name && item.date === dayData.day);
    // console.log(Array.);
    // Get the data on a post that has been removed
    dataRef.on('child_removed', (snapshot) => {
        const deletedPost = snapshot.val();
        console.log('The blog post titled \'' + deletedPost.title + '\' has been deleted');
    });
    return NextResponse.json(Values);
    // }
    // return NextResponse.json({ massage: "you are not authenticated baby" });
}


