import {
  getClosingCashBank,
  getOpeningCashBank,
  getThisYearData,
} from "@components/utils/calculation";
import getThisYear from "@components/utils/formateDate";
import admin, { Auth } from "@firebase";
import { NextResponse } from "next/server";

// Get a reference to the Firebase Realtime Database

export async function GET(request) {
  // structure of db "report/rp/2k22-23/june/nayabazarZone/branch/{head/payment/receipt}"
  const Authorization = request.headers.get("Authorization");
  const idToken = Authorization?.split(" ")[1];
  if (idToken) {
    const uid = (await Auth.verifyIdToken(idToken)).uid;
    console.log(uid);
    //get date from query
    const reportingMonth = request.nextUrl.searchParams.get("date");
    // console.log(reportingMonth);

    // console.log(month, branch);

    //current month information
    const db = admin.database();
    const dataRef = db.ref(
      `/health/rp/${reportingMonth}/nayabazarzone/dhanmondi`
    );
    const snapshot = await dataRef.once("value");
    const data = snapshot.val();
    // this year information
    const thisYear = getThisYear(reportingMonth);

    const thisYearRef = db
      .ref(`/health/rp`)
      .orderByKey()
      .startAt(thisYear.startY)
      .endAt(thisYear.endY);
    const thisYearSnapshot = await thisYearRef.once("value");
    const thisYearRawData = thisYearSnapshot.val();

    const thisYearDataPrimary = getThisYearData(thisYearRawData);
    const cashBankR = getOpeningCashBank(thisYearRawData, thisYear.startY);
    const cashBankP = getClosingCashBank(thisYearRawData, thisYear.endY);
    console.log(cashBankP);
    const thisYearData = {
      ...thisYearDataPrimary,
      ThisYearReceiptData: {
        ...thisYearDataPrimary.ThisYearReceiptData,
        ...cashBankR,
      },
      ThisYearPaymentData: {
        ...thisYearDataPrimary.ThisYearPaymentData,
        ...cashBankP,
      },
    };

    // console.log(cashBank);
    // cumulative information

    const cumulativeRef = db
      .ref(`/health/rp`)
      .orderByKey()
      .endAt(thisYear.endY);
    const cumulativeSnapshot = await cumulativeRef.once("value");
    const cumulativeRawData = cumulativeSnapshot.val();

    const cumulativeDataPrimary = getThisYearData(cumulativeRawData);

    const cumulativeData = {
      ...cumulativeDataPrimary,

      ThisYearPaymentData: {
        ...cumulativeDataPrimary.ThisYearPaymentData,
        ...cashBankP,
      },
    };

    return NextResponse.json({ data, thisYearData, cumulativeData });
  }
  return NextResponse.json({ massage: "you are not authenticated baby" });
}

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const reportingMonth = requestBody.reportingMonth;
    const db = admin.database();
    const dataRef = db.ref(
      `/health/rp/${reportingMonth}/nayabazarzone/dhanmondi`
    );

    // Set the data in the database
    await dataRef.set(requestBody);

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
