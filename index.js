const https=require("https");
const http=require("http");
const express=require("express");
const fs=require("fs");
const { spawn } = require('child_process');
const socketio=require("socket.io");
// Iniciar o processo Node.js

const app = express();
const server=http.createServer(app);
const io=socketio(server);
var processo;
app.use(express.urlencoded({ extended: true }));
io.on("connection",(socket)=>{
    socket.on("devices",)
})
const port = 1000;
server.listen(2000, () => {
    console.log(`Servidor rodando na porta ${port}`);
});