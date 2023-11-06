const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { success, info, error } = require("consola");
const http = require("http");
const mongoose = require("mongoose");

const { port, MongoURI } = require("./config/config");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

// Create Server
const server;

const createServer = async () => {
    try {
        server = http.createServer(app, (req, res) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            info({ message: "Server Created!", badge: true });
        });
    } catch (error) {
        return error({message: `failed to create server\n${error}`, badge: true});
    }
}

createServer();

// Connect to MongoDB Database

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(MongoURI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });
        return success({message: "MongoDB Connection Started", badge: true});
    } catch (error) {
        return error({message: `failed to connect to MongoDB Database \n ${error}`, badge: true});
    }
}

// Start Server
const startServer = async () => {
    try {
        await connectToMongoDB();
        await server.listen(port, ()=>{
            return success({message: `Server Running at Port ${port}`, badge: true});
        });
    } catch (error) {
        return error({message: `failed to start server\n${error}`, badge: true});
    }
}

startServer();