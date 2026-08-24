import db from "../db/mongodb.js";
import { ObjectId } from "mongodb";

// mongodb basic CRUD:


// the function that creats the creats the game:
const collection = db.collection("game");
const mapCollection = db.collection("map")

export async function createGame(gameData){
    try {
        const result = await collection.insertOne(gameData);
    return {
        ...gameData,
        _id: result.insertedId
    }
    } catch (error) {
        console.log(error);
    };
};

// The function in DAL that gets a specific game with an ID that much the game we search for in the data base:
export async function getGameBy(gameId){
    try {
        console.log(new ObjectId(gameId));
        console.log(typeof new ObjectId(gameId));
        
        
        const result = await collection.find({gameId: new ObjectId(gameId)}).toArray();
        return result;
    } catch (error) {
       console.log(error);
       throw error; 
    };
};


export async function addMany(data){
    try {
        const result = await collection.insertMany(date);
        return result;
    } catch (error) {
        console.log(error);  
    };
};

export async function getALL(){
    try {
        const result = await collection.find("*").toArray();
        return result;
    } catch (error) {
        console.log(error);
    };
};





export async function updateGame( gameId, newData){
    const result = await collection.findOneAndUpdate(
        {id: new ObjectId(gameId)},
         {$set: newData},
          {returnDocument: "after"});
};