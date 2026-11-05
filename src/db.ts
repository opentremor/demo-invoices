import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI ?? "mongodb://localhost:27017");

export const db = client.db("billing");
