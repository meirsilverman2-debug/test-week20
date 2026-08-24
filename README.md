* # test-week20 🤖:
---
* # My name is a test on itself:
star (shine) + 925 + 👨‍🦱 will guess the right answer who knows: ??????????????????
---
* ## How to run the docker file:
```
docker build -t <name of the tag (whatever you choose)> . (do not forget the dot/point in the command it is very important ok)
```
---
* ## map.json:
---
because this is already a given data form that I need to choose a kind of database to contain it in I chose supabase because the map on iteself will not change in the game only the control over parts of the map will.
in the end I used mongodb data base for this too becaus I have a problem in my supabase connection even if it is not the optimal thing for it but 
a programer got to do what a programer got to do and I stand bhind my chice.
---
* ## game status:
---

for the status of the game I chose the mongodb data base because it is so flexable/changable so I need something 
that will allow me this freedom to change and add stuff while not being fixed on a specific formula/structure.
---
* ## Server System (file-tree🌳) Structure:
---
```
test-week20
└───server
    ├───controlers
    ├───dal
    ├───db
    ├───app.js
    ├───dockerfile
    ├───map.json
    ├───package.json
    ├───package-lock.json
    ├───.gitignore
    ├───.dockerignore
    ├───.env
    ├───.env.example
    ├───middelwhere
    ├───routes
    └───service
```
 ---
* ## How to run the server:
---
```
npm start (it will be with --watch)
```
---
* ## list of endpoints in the game 📜:
---
```
router.post("/games", (req, res) => {
    res.json({});
});


router.get("/games/:id", (req, res) => {
    res.json({});
});


router.post("/games/:id/reinforce", (req, res) => {  
    res.json({});
});


router.post("/games/:id/attack", (req, res) => {
    res.json({});
});


router.post("/games/:id/move", (req, res) => {
    res.json({});
});


router.post("/games/:id/end-turn", (req, res) => {
    res.json({});
});
```
SIX in total four post and one get because you need to give more than get from others this such a good lesson.
---
* ## Installsion that I install into my system:
```
npm i express mongodb @supabase/supabase-js dotenv cors 
```
---
* ## The first endpoint POST /games 💾:
---
is our first endpoint which gets the player name and than creates the first round of the game which contains the player name the number of the round which is in the bgining  round 1 it also contans the first phase out of four of the player turn which is reinforce the status of the game is of course playing intil the game is finished because the player or the computer won in the game the winner is also null because of the same reason that no has won yet so for now it is null and the territories is a list/array which holds a copy of the map and addition of amount of soldiers for each trritory 8 soldiers for the two HQ in the game for each side the player side and the computer side
and 4 soldiers for any other trritories in the game's map aslo for each side
and if the name is in the right way meaning it is not an ampty one we will receive status code of 201 (it has been created wow!!!) and the object that has benn created plus the new id creted for this game and even if the name came in the requested body with whitespaces we trim it down with the trim string method so it will come out nicely without them ok but if the server receivce a bad body request meaning a an ampty playerName HO NO!!!! this is a big no no and the client will receive back status code 400
with the message "bad reqest" amigo so next play the game but not with the system.
BTW I finished the first end point how anazing is theis ah!!!
---
* ## The second endpoint GET /games/:id:
---
This second end point loads a specific game by getting a query param in the URL path which than the server is searching in the data base for a the same gameId and if it has been found in the database the client recievce a status code 200 (which this code mean OK/good/alright and so on) but if none of the games in the database are found with the requested id that has been given to us by th client than the client will get a status code 404 meanin the a game with this Id has not been found in the entier system of mongodb and he will receive also this nice and kind message in anther lengauge which is not English { "error": "המשחק לא נמצא" }
this is for today I think?🧐.
---
* ## The rhird endpoint POST /games/:id/reinforce:
---
This end point start the first phase of a move which on the turn of the player he chooses a territory to strangth by adding three additinal soldiers to it of course we need to check that the territory is really belongs to the player and that the phase of the game is rienforce if not the player will not be able to make this request the body that is required for this is a territory ID which only the territory that has this specific ID number will be reinforce.

### Side note: this endpoint work amazingly in the postman but in the game itself because of the way that it takes the game ID that has been given in the req.params it does not work I try to fix it with many different kind of method but without really to fix this problem.
---
* ## The forth endpoint POST /games/:id/attack 🛰️:
---
OH OHHHO... this endpoint is a tricky one to say the least in this end point the client has two options one is to choose attcking the other side or to skip this Phase 
by puting in the body request the option skip which if he choose this option the game will be updated to phase 'move' and the playerEvent key of the game will change into 'null' and if the player choose to attack oh than in the requested body not only that he will need to give the location that he wants to attack but also from each territory that he owns will the attack come from 
and how many soldiers he wants to send on this attack mission quest and this end point hold a lot of 'if' and 
logic behind it so it is very hard you will not beleieve it.
---
* ## The fifth endpoint POST /games/:id/move:
---





