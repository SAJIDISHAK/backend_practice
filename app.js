const { request, response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const postModel = require("./schema");

const DB_URL = "mongodb+srv://admin:admin@clusterlearning.wfsa1.mongodb.net/practise";
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on("connected", (connected) => console.log("Database Connected"));
mongoose.connection.on("error", (error) => console.log(`Not connect ${error.message}`));

port = 5000;
const app = express();

app.get("/database", (request, response) => {
    postModel.create(
        {
            title: "CSS",
            disciption: "CSS stand for casacading style sheet",
        },
        (error, data) => {
            if (error) {
                response.send("error.message");
            } else {
                response.send("Success");
                console.log(data);

            }
        }
    );
});

app.get("/find", (request, response) => {
    postModel.findOne(
        {
            title: "CSS",
            // disciption: "CSS stand for casacading style sheet",
        },
        (error, data) => {
            if (error) {
                response.send("error.message");
            } else {
                // response.send("Success");
                response.send(data);
                console.log(data);

            }
        }
    );
});

// app.get("/remove", (request, response) => {
//     postModel.create(
//         {
//             title: "CSS",
//             disciption: "CSS stand for casacading style sheet",
//         },
//         (error,data) => {
//             if (error) {
//                 response.send("error.message");
//             } else {
//                 response.send("Success");
//                 console.log(data);

//             }
//         }
//     );
// });

// app.get("/add", (request, response) => {
//     postModel.create(
//         {
//             title: "CSS",
//             disciption: "CSS stand for casacading style sheet",
//         },
//         (error,data) => {
//             if (error) {
//                 response.send("error.message");
//             } else {
//                 response.send("Success");
//                 console.log(data);

//             }
//         }
//     );
// });

app.use("/home", (request, response, next) => {
    const user = true;
    if (user) {
        console.log("you login");
        response.send("middleware is running");
        next("/");
    } else {
        console.log("you logout");
        response.send("middleware is not running");
    }
});

app.get("/", (request, response) => {
    response.send("you are home");
    response.send("middleware is not running");
});


app.listen(port, () => console.log(`your server is runnig ${port}`));