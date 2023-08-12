const mongoose = require('mongoose');
const expenseSchema = require('./schemas')
const Schema = mongoose.Schema;

const userSchema = new Schema({

    username: {
        type: String,
        required: true

    },
    roles: {
        User: {
            type: Number,
            default: 2001


        },
        Editor: Number,
        Admin: Number


    },
    password: {
        type: String,
        required: true


    },
    Expenses: [{
        Etype: { type: String },
        Eprice: { type: String },
        date: { type: Date, default: Date.now }
    }
    ],
    refreshToken: String

});
const myDB = mongoose.connection.useDb("Users")
const Users = myDB.model("Users", userSchema, "users")

const mySchemas = { 'Users': Users };

module.exports = mySchemas;
/*
const Users = mongoose.model('Users', userSchema, 'users');


const UserSchema = {'Users': Users};

module.exports = UserSchema;
*/
