const mongoose = require("mongoose");
require("dotenv").config();
const connect = () => {
    return mongoose.connect(`mongodb+srv://achyuta:${process.env.KEY}@cluster0.mzxys.mongodb.net/achyuta31382?retryWrites=true&w=majority`)
}

module.exports = connect;