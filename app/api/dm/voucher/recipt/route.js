
import admin, { Auth } from "@firebase";
import { NextResponse } from "next/server";
// Get a reference to the Firebase Realtime Database

export async function GET(request) {
    // structure of db "report/rp/2k22-23/june/nayabazarZone/branch/{head/payment/receipt}"
    const Authorization = request.headers.get("Authorization");
    const idToken = Authorization?.split(" ")[1];
    // if (idToken) {
    //     const uid = (await Auth.verifyIdToken(idToken)).uid;
    //current month information
    const db = admin.database();
    const dataRef = db.ref(
        `/dm/recipt`
    );
    const snapshot = await dataRef.once("value");
    const data = snapshot.val();
    return NextResponse.json(data);
    // }
    // return NextResponse.json({ massage: "you are not authenticated baby" });
}


