
const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')
//const { default: Expenses } = require('../../src/database')



router.post('/expenses', async(req, res) =>{

    const{Etype, Eprice} = req.body
    
    const data = {Etype: Etype, Eprice: Eprice}
    const newEntry = new schemas.Expenses(data)
    const save = await newEntry.save()
    
    if(save){
        res.send('Message Sent')
        


    }
    else{
        res.send('Message not sent');
        

    }
    

    res.end()

})



router.get('/expenses', async(req, res) =>{

    const users = schemas.Expenses;
    const userData = await users.find({}).exec();
    
    if(userData){
        res.send(JSON.stringify(userData));

    }



   // const userData = 
    // [
    //     {
    //         "id": 1,
    //         "ExpenseType": "Groceries",
    //         "ExpensePrice": "$200",



    //     },
    //     {

    //         "id": 2,
    //         "ExpenseType": "Gas",
    //         "ExpensePrice": "$40",


    //     }





    // ]
    //res.send(userData);



})







 

router.post("/deleteExpense", async (req, res) => {
        expenses = schemas.Expenses;
        const{expenseid} = req.body

        expenses.deleteOne({_id: expenseid})
        .then(function(err, res){
            
           // res.send({status: "Ok", data: "Deleted"});


        })
        .catch(err => console.log(err))
    })
    
        /*
        try{
            expenses.deleteOne(
                {_id: expenseid}, function(err, res){
                    console.log(err);
                }
            )
            res.send({status: "Ok", data: "Deleted"});
        }catch(error){

            console.log(error);

        }
    })
        */

        // .then({Etype: Etype}, function(err, res){
        //     console.log(err);
        //     res.send({status: "Ok", data: "Deleted"});

        // })
        //     /*
        //     {Etype: expenseid}, function(err, res){
        //         console.log(err);

        //     })
        //     */
        //     .catch(err => console.log(err))
        // });
       

   

        
    








module.exports = router