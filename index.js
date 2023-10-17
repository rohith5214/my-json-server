//imort json server in index.js file
const jsonServer = require('json-server')

//create a server for media player app
const mediaPlayerServer = jsonServer.create() 

//set up path/router from json file
const router = jsonServer.router("db.json")

//Returns middlewares used by json server
const middleWares = jsonServer.defaults()

//set up port for runnig server
const port = 4000 || process.env.PORT 

//use middleware snd router in server
mediaPlayerServer.use(middleWares)
mediaPlayerServer.use(router)

//to listen server for resolving request from client
mediaPlayerServer.listen(port,()=>{
    console.log(`media player server starts at port ${port} and waiting for client request...!`);
})

