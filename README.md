* # test-week20:
---
* ## How to run the docker file:
```
docker build -t <name of the tag (whatever you choose)> . (do not forget the dot/point in the command it is very important ok)
```
---
* ## map.json:
---
because this is already a given data form that I need to choose a kind of database to contain it in I chose supabase because the map on iteself will not change in the game only the control over parts of the map will.
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
* ##




