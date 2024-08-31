
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
            `/dm/day`
        );
        const snapshot = await dataRef.once("value");
        const data = snapshot.val();
    return NextResponse.json(data);
    // }
    // return NextResponse.json({ massage: "you are not authenticated baby" });
}

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const db = admin.database();
        const dataRef = db.ref(
            `/dm/${requestBody.voucherType}`
        );

        // Push new data to get the key
        const newDataRef = await dataRef.push({
            ...requestBody,
            createdAt: admin.database.ServerValue.TIMESTAMP,
        });

        // Get the generated key
        const newKey = newDataRef.key;

        // Now update the entry with the key as the value
        await dataRef.child(newKey).update({
            key: newKey
        });

        // Read the data back from the database
        const snapshot = await dataRef.once("value");
        const responseData = snapshot.val();

        console.log("Data updated successfully");
        return new Response(JSON.stringify(responseData), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error("Error:", err);
        return new Response(JSON.stringify({ error: "An error occurred" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
