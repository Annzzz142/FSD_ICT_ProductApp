const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ProductDb');
const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    name : String,
    mailID : String,
    phoneNum : Number,
    address : String,
    userName : String,                                                                                                                        
    password : String,
    imageUrl : String
    },{
        collection : 'user'
    });

var Userdata = mongoose.model('user', NewUserSchema);

module.exports = Userdata;