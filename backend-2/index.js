
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require("./routes/router");
const app = express();
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;


require('dotenv/config');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


const corsOptions = {

    origin: '*',
    credentials: true,
    optionSuccessStatus: 200

}
app.use(cors(corsOptions));

app.use('/', router);

const dbOptions = {useNewUrlParser:true, useUnifiedTopology:true};
mongoose.connect(process.env.DB_URI, dbOptions)
.then(() => console.log("DB connected!"))
.catch(err => console.log(err))


const port = process.env.PORT;
const server = app.listen(port, () => {

    console.log(`Server is running on port ${port}`)


})



/*
MongoClient.connect(process.env.DB_URI, dbOptions =>{
    app.post("/deleteExpense", async (req, res) => {

  
    const database = client.db("Expenses")
    const Expensest = database.collection("expenses")
    
    const {Etype} = req.body;
    const query = {Etype: Etype};
    

        const Etypes = await Expensest.deleteOne(query);

        if(Etypes.deletedCount === 1){

            res.send("Success");

        }
        else{
            res.send("No docs matched");

        }
    
  
        client.close();
} )})
*/
