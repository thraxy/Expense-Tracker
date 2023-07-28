const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({

    Etype: {type: String},
    Eprice: {type: String},
    date: {type:Date, default:Date.now}


});

const Expenses = mongoose.model('Expenses', userSchema, 'expenses');


const mySchemas = {'Expenses': Expenses};

module.exports = mySchemas;