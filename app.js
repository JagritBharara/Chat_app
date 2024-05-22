const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
const http = require('http');

const server = http.createServer(app)

const socketio = require('socket.io');

const io = socketio(server)

// const mongoose = require('mongoose');
//const router = express.Router();
app.use(express.urlencoded({extended:true}));
app.use('/',express.static(path.join(__dirname,'public')));

let users =[];
io.on('connection',(socket)=>{
    // console.log(socket.id)
    console.log("connection is estabilised");
    socket.on('send-msg',(data)=>{
        console.log(data);

        io.emit('received-msg',{
            msg : data.msg,
            username  : users[socket.id]
        })
    })
    socket.on('login',(data)=>{
        users[socket.id]= data.username
    })
})

// console.log(io);



server.listen(PORT,()=>{
 console.log('localhost/'+PORT);
})