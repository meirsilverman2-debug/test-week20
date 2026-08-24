import { MongoClient } from "mongodb";

// basic mongodb config:

const client = new MongoClient(process.env.MONGODB_URL || "mongodb://localhost:27017");

try {
    await client.connect();
    console.log("mongodb is successfuly connected now to the system");
} catch (error) {
    console.log(error);
};

const db = client.db("game");

export default db;