import { NextResponse } from "next/server";
import admin from "../../../firebase";

export async function GET(request) {
  try {
    const userRecords = await admin.auth().listUsers();
    const userList = [];

    userRecords.users.forEach((user) => {
      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        phoneNumber: user.phoneNumber,
        providerIds: user.providerData.map((userInfo) => userInfo.providerId),
      };
      userList.push(userData);
    });

    return NextResponse.json(userList);
  } catch (error) {
    console.error("Error listing users:", error);
    return NextResponse.error(error); // You may want to handle the error appropriately
  }
}

export async function POST(request) {}
