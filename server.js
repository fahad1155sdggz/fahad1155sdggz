const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const TaskRoute = require("./Route/TaskRoute");

app.use("/api/Task", TaskRoute);


app.get("/", (req, res) => {
    res.send("app is running");
});
// server code
app.listen(5000, () => {
    console.log("App is running on port 5000");

    mongoose
        .connect("mongodb+srv://class01:nehKOKM4KyWnTwPs@cluster0.mbfkc.mongodb.net/")
        .then(() => {
            console.log("Database connected successfully");
        })
        .catch((err) => {
            console.log("Error connecting to database:", err);
        });
});
