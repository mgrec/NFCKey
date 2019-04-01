const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// home
app.get('/access/:token/:key', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('user try to unlock door !');
    socket.on('disconnect', function(){
        console.log('user disconnected !');
    });
});

// lunch server
http.listen(3030, function(){
    console.log('listening on *:3030');
});