/* Schema Not currently being used */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const expenseSchema = new Schema({

    Etype: { type: String },
    Eprice: { type: String },
    date: { type: Date, default: Date.now }


});


/*
const myDB = mongoose.connection.useDb("Expenses")
*/
const Expenses = mongoose.model("Expenses", expenseSchema, "expenses")

const mySchemas = { 'Expenses': Expenses };

module.exports = mySchemas;
/*

const Expenses = mongoose.model('Expenses', userSchema, 'expenses');


const mySchemas = {'Expenses': Expenses};

module.exports = mySchemas;
*/