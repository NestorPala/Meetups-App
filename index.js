require("dotenv").config();

const PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static(__dirname + "/frontend/meetups_app/build"));

app.get("/", (req, res) => {
    res.send("index.html");
});

// Authentication
require('./routes/auth')(app);

const mainRouter = require("./routes/Meetups-App");
app.use("/Meetups-App", mainRouter);

if (!process.env.DATABASE_URL) {
    console.log(`
        You don't have the DB connection data.          
        Contact the owner for the credentials.`);
    return;
}

console.log("Starting the server. Please wait...");

mongoose.connect(process.env.DATABASE_URL)
    .then(
        () => {
            console.log("Connected to the database");
            app.listen(PORT, () => {
                console.log("Connected on port " + PORT);
                console.log("Server is running!");
            });
        },
        err => {
            console.log("Could not connect to database");
            console.log("Could not start the server");
        }
    );
