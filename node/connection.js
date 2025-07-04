const mongoose = require("mongoose")

const url = "mongodb+srv://aayuship822:17LvOMNcLktYp8Oz@cluster0.nhvitts.mongodb.net/newdata?retryWrites=true&w=majority&appName=Cluster0";

const connection = async () =>{
    return mongoose.connect(url)
}

module.exports = connection;