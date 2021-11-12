const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const historyRouter = require("./back-end/routes/history");

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
app.options("*", cors({ origin: 'http://jpoms.com', optionsSuccessStatus: 200 }));
app.use(cors({ origin: "http://jpoms.com", optionsSuccessStatus: 200 }));
const db = require("./back-end/config/keys").mongoURI;
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/api', {
        target: 'http://www.api.com',
        logLevel: 'debug',
        changeOrigin: true
    }));
};
// Routes
app.use("/history", historyRouter);

const server = http.createServer(app)

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
