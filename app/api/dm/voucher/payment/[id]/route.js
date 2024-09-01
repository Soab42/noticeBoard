
import admin, { Auth } from "@firebase";
import { NextResponse } from "next/server";

export async function GET(request) {

    return NextResponse.json({ status: 200 });

}



export async function DELETE(request, { params }) {
    try {
        // Get a reference to the database
        const db = admin.database();
        const dataRef = db.ref(`/dm/payment/${params.id}`);

        // Remove the data from the database
        await dataRef.remove();

        // Return a success response
        return NextResponse.json({ message: "Data deleted successfully" });
    } catch (error) {
        console.error("Error deleting data:", error);
        return NextResponse.json({ error: "Failed to delete data" }, { status: 500 });
    }
}


