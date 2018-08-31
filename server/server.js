const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public');
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000
const io = socketIO(server);

app.use(express.static(publicPath));

server.listen(port, ()=>{
    console.log(`Listing at the port ${port}`);
});

io.on('connection', (socket)=>{
    console.log('new user connected');

    socket.on('disconnect', ()=>{
        console.log('Client hangedup');
    });

    socket.on('createNewMessage', (msg)=>{
        console.log("A new message arrived");
        io.emit('newMessage', {
            name: msg.name,
            text: msg.text
        })
    })
})