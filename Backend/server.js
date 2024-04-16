const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("http");
const  cors = require("cors");
const jwt= require("jsonwebtoken");
const  cookieParser =require("cookie-parser");


const secretKeyJWT = "asdasdsadasdasdasdsa";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});



app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true,
    })
  );


  app.get("/", (req, res) => {
    res.send("Hello World!");
  });


io.on('connection',(socket)=>{
    console.log(`user connected with ${socket.id} user id`);
    socket.on('disconnect',()=>{
        console.log(`user disconnected with ${socket.id} user id`)
    })

    socket.on('send-msg',(msg)=>{

        // console.log(msg);

        io.emit('recived-msg',{user:user[socket.id] , text:msg});
    })


    socket.on('login', (data) => {
        user[socket.id] = data.username;
    })
})

const port = 3000;
server.listen(port,(req,res)=>{
    console.log(` socket server started at port ${port}`);
})

