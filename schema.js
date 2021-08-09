const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        number: Number,
        age: Number,
        created_on: {
            type: Date,
            default: Date.now,
        }
    }
);

const postModel = mongoose.model("third", postSchema);
module.exports = postModel;