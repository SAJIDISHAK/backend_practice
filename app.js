const express = require("express");
const mongoose = require("mongoose");
const postModel = require("./schema");
const cors = require("cors");
const port = 5000;
const app = express();

const DB_URL = "mongodb+srv://admin:admin@clusterlearning.wfsa1.mongodb.net/practise";
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on("connected", (connected) => console.log("Database Connected"));
mongoose.connection.on("error", (error) => console.log(`Not connect ${error.message}`));


// Middle Ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// create
app.post("/add", (request, response) => {
    try {
        const body = request.body
        postModel.create(body, (error, data) => {
            if (error) {
                throw error
            } else {
                response.send("Create Succesfully")
            }
        })
    } catch (error) {
        response.send("error")
    }
});

function send() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const number = document.getElementById("number").value;
    const age = document.getElementById("age").value;
    // const post = document.getElementById("post");

    const obj = {
        name: name,
        email: email,
        password: password,
        number: number,
        age: age,
    }
    console.log(obj);

    axios.post('http://localhost:5000/add', obj)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

app.listen(port, () => console.log(`your server is runnig ${port}`));