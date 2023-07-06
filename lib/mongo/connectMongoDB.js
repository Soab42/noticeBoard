import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017"; // Replace with your MongoDB connection string
const dbName = "db"; // Replace with your database name

async function connectToDatabase() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    console.log(db);
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // throw new Error("Failed to connect to MongoDB");
  }
}

export default connectToDatabase;
