const express = require('express');
const path = require('path');
const app = express();

// import the routes
const route = require("./routes/main");

// set up template engine ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// set up public folder as a static, so we could use the CSS inside in our HTML pages
app.use(express.static(path.join(__dirname, 'public')));

// make sure the app can handle requests with JSON
app.use(express.json());

// make CORS work (able to communicate between clients and serves on different ports)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use(route);

const server = app.listen(process.env.PORT||3000, () => {
    console.log("Server is running on port 3000");
});

const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('Client connected');

    socket.on('new-name', () => {
        // if a user added a name, all the other users on different devices and places will see the updated list cause we use "emit"
        socket.broadcast.emit('updateAvengerList');
    })
})
