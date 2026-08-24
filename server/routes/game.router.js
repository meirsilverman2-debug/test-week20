import express from "express";
import { createGameCtrl, getGameByCtrl, reinforceCtrl, attackCtrl } from "../controlers/game.controler.js";

const router = express.Router();


// The first router for creating a the first round of the game:
router.post("/games", createGameCtrl);


// The third endpoint for the first phase reinforce:
router.post("/games/:id/reinforce", reinforceCtrl);



// The forth endpoint for the optional attack which is the second possible phase:
router.post("/games/:id/attack", attackCtrl);



// The second router for loading a game by ID:
router.get("/games/:id", getGameByCtrl);








router.post("/games/:id/move", (req, res) => {
    console.log("/games/:id/move");

    res.json({});
});


router.post("/games/:id/end-turn", (req, res) => {
    console.log("/games/:id/end-turn");

    res.json({});
});


export default router;
