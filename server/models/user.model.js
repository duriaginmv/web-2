const mongoose = require("mongoose");

const User = mongoose.model("User", new mongoose.Schema({
    username: String,
    email: String,
    email: String,
}))

module.exports = User;