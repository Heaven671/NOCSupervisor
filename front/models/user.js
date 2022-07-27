const mongoose = require('mongoose');
const { Schema } = mongoose;
var userModel = new Schema({
    name: String,
    mail: {type: String, lowercase: true},
    password: String,
    created: {type:Date, default: Date.now()}
});

const User = module.exports = mongoose.models.User || mongoose.model('User', userModel);