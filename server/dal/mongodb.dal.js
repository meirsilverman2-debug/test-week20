import db from "../db/mongodb.js";
import { Long, ObjectId } from "mongodb";

// mongodb basic CRUD:


// the function that creats the creats the game:
const collection = db.collection("game");
const mapCollection = db.collection("map")


// For the creation of the map into a collection of its own in mongodb:
export async function createMap(map) {
    try {
        await mapCollection.insertMany(map);
    } catch (error) {
        console.log(error);
        throw (error);
    };
};


// To get all of the element that are part of the map meaning the cities and so on you know:
export async function getTheEntierMap() {
    try {
        const map = await mapCollection.find().toArray();
        return map;
    } catch (error) {
        console.log(error);
        throw error;
    };
};


// This one is for one use only:

// await createMap([
//   { "id": 1,  "name": "טריפולי",      "x": 63.00, "y": 4.00,  "neighbors": [2, 3], "startOwner": "computer", "distanceFromComputerHQ": 1, "distanceFromPlayerHQ": 6 },
//   { "id": 2,  "name": "ביירות",       "x": 50.80, "y": 13.00, "neighbors": [1, 4, 5], "startOwner": "computer", "headquarters": true, "distanceFromComputerHQ": 0, "distanceFromPlayerHQ": 6 },
//   { "id": 3,  "name": "בעלבכ",        "x": 70.30, "y": 8.00,  "neighbors": [1, 5, 9], "startOwner": "computer", "distanceFromComputerHQ": 2, "distanceFromPlayerHQ": 5 },
//   { "id": 4,  "name": "צידון",        "x": 48.80, "y": 16.50, "neighbors": [2, 5, 6, 7], "startOwner": "computer", "distanceFromComputerHQ": 1, "distanceFromPlayerHQ": 5 },
//   { "id": 5,  "name": "זחלה",         "x": 62.50, "y": 12.00, "neighbors": [2, 3, 4, 6, 9], "startOwner": "computer", "distanceFromComputerHQ": 1, "distanceFromPlayerHQ": 5 },
//   { "id": 6,  "name": "נבטיה",        "x": 53.70, "y": 19.00, "neighbors": [4, 5, 7, 8, 9], "startOwner": "computer", "distanceFromComputerHQ": 2, "distanceFromPlayerHQ": 5 },
//   { "id": 7,  "name": "צור",          "x": 45.90, "y": 21.00, "neighbors": [4, 6, 8, 10], "startOwner": "computer", "distanceFromComputerHQ": 2, "distanceFromPlayerHQ": 4 },
//   { "id": 8,  "name": "בינת ג׳בייל",  "x": 50.80, "y": 23.50, "neighbors": [6, 7, 9, 10], "startOwner": "computer", "distanceFromComputerHQ": 3, "distanceFromPlayerHQ": 4 },
//   { "id": 9,  "name": "מרג׳ עיון",    "x": 60.50, "y": 22.00, "neighbors": [3, 5, 6, 8, 12], "startOwner": "computer", "distanceFromComputerHQ": 2, "distanceFromPlayerHQ": 4 },
//   { "id": 10, "name": "נהריה",        "x": 43.90, "y": 35.20, "neighbors": [7, 8, 11, 13], "startOwner": "player", "distanceFromComputerHQ": 3, "distanceFromPlayerHQ": 3 },
//   { "id": 11, "name": "צפת",          "x": 61.50, "y": 31.90, "neighbors": [10, 12, 13, 14], "startOwner": "player", "distanceFromComputerHQ": 4, "distanceFromPlayerHQ": 3 },
//   { "id": 12, "name": "קריית שמונה",  "x": 68.40, "y": 27.30, "neighbors": [9, 11, 14], "startOwner": "player", "distanceFromComputerHQ": 3, "distanceFromPlayerHQ": 3 },
//   { "id": 13, "name": "חיפה",         "x": 39.70, "y": 41.30, "neighbors": [10, 11, 15, 16], "startOwner": "player", "distanceFromComputerHQ": 4, "distanceFromPlayerHQ": 2 },
//   { "id": 14, "name": "טבריה",        "x": 66.40, "y": 33.50, "neighbors": [11, 12, 16], "startOwner": "player", "distanceFromComputerHQ": 4, "distanceFromPlayerHQ": 2 },
//   { "id": 15, "name": "נתניה",        "x": 34.20, "y": 50.00, "neighbors": [13, 18], "startOwner": "player", "distanceFromComputerHQ": 5, "distanceFromPlayerHQ": 2 },
//   { "id": 16, "name": "עפולה",        "x": 53.70, "y": 40.40, "neighbors": [13, 14, 17, 18], "startOwner": "player", "distanceFromComputerHQ": 5, "distanceFromPlayerHQ": 1 },
//   { "id": 17, "name": "ירושלים",      "x": 50.80, "y": 56.60, "neighbors": [16, 18, 20], "startOwner": "player", "headquarters": true, "distanceFromComputerHQ": 6, "distanceFromPlayerHQ": 0 },
//   { "id": 18, "name": "תל אביב",      "x": 29.30, "y": 57.30, "neighbors": [15, 16, 17, 19], "startOwner": "player", "distanceFromComputerHQ": 6, "distanceFromPlayerHQ": 1 },
//   { "id": 19, "name": "באר שבע",      "x": 39.10, "y": 71.60, "neighbors": [18, 20, 21], "startOwner": "player", "distanceFromComputerHQ": 7, "distanceFromPlayerHQ": 2 },
//   { "id": 20, "name": "חברון",        "x": 48.80, "y": 61.80, "neighbors": [17, 19, 21], "startOwner": "player", "distanceFromComputerHQ": 7, "distanceFromPlayerHQ": 1 },
//   { "id": 21, "name": "אילת",         "x": 42.70, "y": 98.70, "neighbors": [19, 20], "startOwner": "player", "distanceFromComputerHQ": 8, "distanceFromPlayerHQ": 2 }
// ]
// )

export async function createGame(gameData) {
    try {
        console.log("creatGame");

        // Getting a copy of the map from the database into are creation of the game:
        const map = await getTheEntierMap();

        // Logs for checking:
        // console.log(map);
        // console.log(typeof map);

        // To add the amount of soldiers for each city and the current owner of that city,
        // and also adding each element of the map into the key in the object of the game which is the territories key:
        map.forEach((e) => {
            if (e.name === "ירושלים" || e.name === "ביירות") {
                e["soldiers"] = 8;
            }
            else { e["soldiers"] = 4 };

            e["owner"] = e.startOwner;
            gameData["territories"] += e;
        });

        // Logs for checking:
        // console.log(map);
        // console.log(gameData);

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
export async function getGameBy(gameId) {
    try {
        const result = await collection.find({ _id: new ObjectId(gameId) }).toArray();
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    };
};


export async function addMany(data) {
    try {
        const result = await collection.insertMany(date);
        return result;
    } catch (error) {
        console.log(error);
    };
};


export async function getALL() {
    try {
        const result = await collection.find("*").toArray();
        return result;
    } catch (error) {
        console.log(error);
    };
};


export async function updateGame(gameId, newData) {
    const result = await collection.findOneAndUpdate(
        { id: new ObjectId(gameId) },
        { $set: newData },
        { returnDocument: "after" });
};