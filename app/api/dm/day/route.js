
import admin, { Auth } from "@firebase";
import { NextResponse } from "next/server";
import {revalidatePath} from "@node_modules/next/dist/server/web/spec-extension/revalidate-path";
// Get a reference to the Firebase Realtime Database

export async function GET(request) {
    const db = admin.database();
    const dataRef = db.ref(
        `/dm/day/branchData`
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
        const branchDataRef = db.ref(
            `/dm/branchData/${requestBody.branchName}/${requestBody.date}`,
        );

        // Push new data to get the key
        const newDataRef = await branchDataRef.set({
            ...requestBody,
            createdAt: admin.database.ServerValue.TIMESTAMP,
            updatedAt: admin.database.ServerValue.TIMESTAMP,
        });
        // Parse the date from the string
        const currentDate = new Date(requestBody.date);

        // Add one day
        currentDate.setDate(currentDate.getDate() + 1);

        // Convert the updated date back to an ISO string
        const nextDate = currentDate.toISOString().split('T')[0];
        // console.log(nextDate);
        const branchDayRef = db.ref(`/dm/day/${requestBody.code}`);
        await branchDayRef.update({
            day: nextDate
        })

        // Read the data back from the database
        const snapshot = await branchDayRef.once("value");
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
