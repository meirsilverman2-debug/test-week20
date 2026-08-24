import { ObjectId } from "mongodb";
import {createGame,  getGameBy} from "../dal/mongodb.dal.js";
import {} from "../dal/supabase.dal.js";

// function creatError(message, status){
//     const error = new Error(message);
//     error.status = status
//     return error
// };


// Creating a game:
export async function createGameService(data){
    const result =  await createGame(data);
    return result; 
};


// Getting a game by ID:
export async function  getGameByService(gameId){
    const result = await  getGameBy(gameId);
    return result;
};