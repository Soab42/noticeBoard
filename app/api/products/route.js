import connectToDatabase from "@lib/mongo/connectMongoDB";
import { NextResponse } from "next/server";

export async function GET(request) {
  const clint = connectToDatabase();
  const collection = (await clint).collection("products");
  const data = await collection.find().toArray();
  // console.log("got collection:", clint);
  return NextResponse.json(data);
}
// write code for POST request

export async function POST(request) {
  const data = await request.json();

  // Connect to the database
  const client = connectToDatabase();
  const collection = (await client).collection("products");

  // Insert new product into the database
  const result = await collection.insertOne(data);

  // Return response as JSON
  return NextResponse.json(result);
}
//write code for PUT to database
export async function PUT(request) {
  const { id, ...product } = await request.json();
  const clint = connectToDatabase();
  const collection = (await clint).collection("products");
  const result = await collection.replaceOne({ _id: ObjectId(id) }, product);
  return NextResponse.json(result);
}
//write code for PATCH to database
export async function PATCH(request) {
  const { id, ...updates } = await request.json();
  const clint = connectToDatabase();
  const collection = (await clint).collection("products");
  const result = await collection.updateOne(
    { _id: ObjectId(id) },
    { $set: updates }
  );
  return NextResponse.json(result);
}
//write code for DELETE to database
export async function DELETE(request) {
  const { id } = await request.json();
  const clint = connectToDatabase();
  const collection = (await clint).collection("products");
  const result = await collection.deleteOne({ _id: ObjectId(id) });
  return NextResponse.json(result);
}
