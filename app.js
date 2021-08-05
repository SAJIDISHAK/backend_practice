const { response } = require("express");
const express = require("express");
const { get, request } = require("http");
const mongoose = require("mongoose");

const URL = "mongodb+srv://admin:<admin>@clusterlearning.wfsa1.mongodb.net/practise";
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// mongoose.connection.on("Connected", console.log("Connected"))
// mongoose.connection.on("Error",(error) => console.log(`Error: ${error.message}`))

const port = 5000;
const app = express();

// Middleware 
app.use("/", (request, response, next) => {
    const user = true;
    if (user) {
        console.log("user login");
        next();
    } else {
        response.send("user is logout");
        console.log("user is logout");
    }
})

// Simple API
app.get("/", (request, response) => {
    response.send("login status")

});

app.get("/home", (request, response) => {
    response.send("you are in home page")

});














app.listen(port, () => console.log(`server start ${port}`));
