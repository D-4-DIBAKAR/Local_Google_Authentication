const mongoose = require('mongoose');
//CONNECTING TO SERVER
require('dotenv').config();
exports.connectMongoose = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/node-authentication")
        .then(() => {
            console.log(`Connected Succesfully To Database.`);
        })
        .catch((err) => {
            console.log(`error connecting to database`, err);
        })
}
