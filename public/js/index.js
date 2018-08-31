var socket = io();
socket.on('connect', ()=>{
    console.log('connected to the server');

    socket.emit('createNewMessage', {
        to: "everyone",
        text: "Helloooo"
    })
});
socket.on('disconnect', ()=>{
    console.log('disconnected from the server');
});

socket.on('newMessage', (message)=>{
    console.log('There is a new message');
    console.log(JSON.stringify(message));
});