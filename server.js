const express = require('express')
const http = require('http')
const https = require('https')
const socketIO = require('socket.io')
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const fs = require('fs');
const historyRouter = require("./back-end/routes/history");
const projectRouter = require("./back-end/routes/project");
require('dotenv').config();

// our localhost port
const port = process.env.PORT || 3001;
const app = express()
app.use(cors());
app.use(express.json());
// our server instance
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// Add headers before the routes are defined

const db = require("./back-end/config/keys").mongoURI;
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// Routes
app.use("/api/history", historyRouter);
app.use("/api/project", projectRouter);

const server = https.createServer({
  key: fs.readFileSync('/var/www/jpoms/privkey.pem'),
  cert: fs.readFileSync('/var/www/jpoms/fullchain.pem'),
}, app);

// This creates our socket using the instance of the server
const io = socketIO(server)

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('User connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))
