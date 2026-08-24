import { ObjectId } from "mongodb";
import { createGame, getGameBy, getTheEntierMap, deleteGame, updateGame } from "../dal/mongodb.dal.js";
import { } from "../dal/supabase.dal.js";


// function creatError(message, status){
//     const error = new Error(message);
//     error.status = status
//     return error
// };


// Creating a game:
export async function createGameService(data) {

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
            data["territories"].push(e);
        });

        // Logs for checking:
        // console.log(map);
        // console.log(gameData);

    const result = await createGame(data);
    return result;
};


// Getting a game by ID:
export async function getGameByService(gameId) {
    try {
        if (!gameId) {
            const error = new Error("bad request");
            error.status = 400;
            throw error;
        };
        const result = await getGameBy(gameId);
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    };
};

export async function reinforceSrvice(gameId, gameData){
    try {
        console.log("reinforceSrvice");
        
        if (!gameId || ! gameData) {
            const error = new Error("bad request");
            error.status = 400;
            throw error;
        };

        const game = await getGameBy(gameId);

        
        if (!game || game.length === 0 ) {
            const error = new Error("המשחק לא נמצא");
            error.status = 404;
            throw error;
        };

        if (game[0].status === "finishing" || game[0].phase !== "reinforce"){
            const error = new Error("You are not allow to reinforce in this stage");
            error.status = 409;
            throw error;
        };

        console.log(game);
        console.log(typeof game);
        
        console.log(typeof(game[0]["territories"]));
        
        game[0].territories.forEach((e) => {
            if (e.id === gameData && e.owner === "player"){
                e.soldiers += 3;
            }
        });

        game[0].playerEvent = `the player has reinforce the location with the ID ${gameData["territoryId"]} with three additional soldiers`;
        game[0].computerEvents = [];
        game[0].phase = "attack";
        console.log(game);

        // const deletedGame = await deleteGame(gameId);
        // console.log(deleteGame);
        // console.log(typeof deleteGame);
        
        
        const result = await updateGame(gameId, game[0]);
        return result;
        
    } catch (error) {
        console.log(error);
        throw error;  
    };
};


export async function attackService(formID, toId, soldiers, skip){
    try {
        const game = await getGameBy(id);
        game[0].territories.forEach((t) => {
            if (t.id !== formID || t.id !== toId || t.owner !== "player" || t.soldiers <= soldiers){
                const error = new Error("bad reques");
                error.status = 409;
                throw error;
            };
        });
        
    } catch (error) {
        console.log(error);
        throw error;
    };
};