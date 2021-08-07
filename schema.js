const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title: String,
        disciption: String,
        created_on: {
            type: Date,
            default: Date.now,
        }
    }
);

const postModel = mongoose.model("dev", postSchema);
module.exports = postModel;