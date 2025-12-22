// lib/mongodb.ts
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Missing MONGODB_URI");
}

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const clientPromise =
  global._mongoClientPromise ??
  (global._mongoClientPromise = new MongoClient(uri).connect());

export default clientPromise;
