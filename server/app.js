import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";
import gameRouter from "./routes/game.router.js";


// The creation of the connection/object of express;
const app = express();
// The calling of very secret port number that we put in the env file and if it will not work we have the || statment to make it equale to this (3012) port ok:
const port = process.env.PORT || 3007;
console.log(port);



// to catch the body and the cors so that we will not have a conflict betweem the two local ports (of the server and the HTML);
app.use(express.json());
app.use(cors());


// The game router of our server:
app.use("/", gameRouter);


// error middelwhere:
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.status ? err.message : "something went wrong";
    res.status(status).json({ success: false, message });
});


// The port that the server is listening to on the local computer:
app.listen(port, (e) => {
    if (e) return console.log(e);
    console.log(`Server is running on http://localhost:${port}`);
});