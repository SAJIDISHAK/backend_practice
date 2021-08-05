const { response } = require("express");
const express = require("express");
const { get } = require("http");
const mongoose = require("mongoose");

const port = 5000;
const app = express();

app.get("/",(request,response) => {
    response.send("you are in home page")
    
});















app.listen(port , () => console.log(`server start ${port}`));
