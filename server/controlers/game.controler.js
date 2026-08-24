import { createGameService, getGameByService, reinforceSrvice } from "../service/game.service.js";


// the first controler that creates the first round of the game:
export async function createGameCtrl(req, res, next) {
    try {
        let { playerName } = req.body;
        playerName = playerName.trim();

        // The basic logic in playerName that we receive in the requested body:
        if (!playerName) {
            const error = new Error("bad request");
            error.status = 400;
            throw error;
        };

        const gameData = {
            playerName: playerName,
            round: 1,
            phase: "reinforce",
            status: "playng",
            winner: null,
            territories: []
        };

        const game = await createGameService(gameData);
        res.status(201).json(game)

    } catch (error) {
        console.log(error);
        next(error);
    };
};


// To load a specific game by a game ID:
export async function getGameByCtrl(req, res, next) {
    try {
        const { id } = req.params;
        const game = await getGameByService(id);
        if (!game || game.length === 0) {
            res.status(404).json({ "error": "המשחק לא נמצא" });
        };

        res.status(200).json(game);
    } catch (error) {
        console.log(error);
        next(error);
    };
};


export async function reinforceCtrl(req, res, next) {
    try {
        console.log("reinforceCtrl");
        const { territoryId } = req.body;
        const { id } = req.params;

        console.log(id);
        console.log(typeof id);
        
        console.log(territoryId);
        console.log(typeof territoryId);

        const game = await reinforceSrvice(id, territoryId);
        res.status(200).json(game);

    } catch (error) {
        console.log(error);
        next(error);
    };
};