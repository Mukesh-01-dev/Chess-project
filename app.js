const express = require('express');
const socket = require('socket.io');
const http = require('http');
const {Chess} = require('chess.js');
const path = require('path');

const app = express();

const server = http.createServer(app);
const io = socket(server);

const chess = new Chess();
let players = {};
let currentplayer = "W";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {
    res.render('index');
})

io.on("connection", (uniqueSocket) => {
    console.log("connected");
});

server.listen(3000, () => {
    console.log("Server has started on port 3000");
});