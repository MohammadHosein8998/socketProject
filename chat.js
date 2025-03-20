import express from "express";
import { Server } from "socket.io";
import http from "http"
import { log } from "console";


const app = express();
const server1 = http.createServer(app);

const io = new Server(server1); 


app.use(express.static(process.cwd() + "\\public"));


io.on("connection" , (socket)=>{
   
    socket.on("newMessageToServer" ,(data)=>{
        console.log(data.text);
        
        socket.emit("newMessageToClient" , {"text" : data.text});
    })
});

server1.listen(8000);
