const express = require('express')
const router = express.Router()
//const schemas = require('../models/schemas')
const userschema = require('../models/User')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/expenses', async (req, res) => {

    const cookies = req.cookies;
    const { Etype, Eprice } = req.body
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    const users = userschema.Users;
    const userData = await users.findOne({ refreshToken }).exec();
    const data = { Etype: Etype, Eprice: Eprice }
    //const newEntry = new schemas.Expenses(data)
    userData.Expenses.push(data)
    const save = await userData.save();
    // console.log(save);
    // const save = await newData.save()

    // console.log(userData);
    /*
        const { Etype, Eprice } = req.body
    
        const data = { Etype: Etype, Eprice: Eprice }
        const newEntry = userschema.Users(data)
        //const newEntry = new schemas.Expenses(data)
        const save = await newEntry.save()
    */
    if (save) {
        res.send('Message Sent')
    }
    else {
        Up
        res.send('Message not sent');
    }
    res.end()
})



router.get('/expenses', async (req, res) => {

    const cookies = req.cookies;
    if (!cookies?.jwt) {
        return res.sendStatus(401);
    }
    const refreshToken = cookies.jwt;
    const users = userschema.Users;
    const userData = await users.findOne({ refreshToken }).exec();

    // const expenses = schemas.Expenses;
    // const userData = await expenses.find({}).sort({ date: 1 }).exec();

    if (userData) {
        res.send(JSON.stringify(userData.Expenses));
    }
})

router.post("/deleteExpense", async (req, res) => {
    const cookies = req.cookies;
    const { expenseid } = req.body
    if (!cookies?.jwt) {
        //console.log("Hello")
        return res.sendStatus(401);
    }
    const refreshToken = cookies.jwt;
    const users = userschema.Users;
    const userData = await users.findOne({ refreshToken }).exec();
    // console.log(userData._id);
    // console.log(expenseid);
    userData.Expenses.pull({ _id: expenseid })
    // console.log(userData.Expenses);
    const save = await userData.save();
    res.end();
    //console.log(save);
    //console.log(newData);
    /*
        expenses.deleteOne({ _id: expenseid })
            .then(function (err, res) {
    
                // res.send({status: "Ok", data: "Deleted"});
    
    
            })
            .catch(err => console.log(err))
            */
})

router.post('/register', async (req, res) => {
    let flag = 0;
    const { user, pwd } = req.body
    if (!user || !pwd) return res.status(400).json({ "Message": "Username and password are required." })
    const users = userschema.Users;
    const userData = await users.find({}).exec();

    for (let i = 0; i < userData.length; i++) {
        if (userData[i].username === user) {
            flag = 1
        }
    }
    if (flag === 1) {
        return res.sendStatus(409);
    }

    try {
        //encrypt password
        const hashedPwd = await bcrypt.hash(pwd, 10);

        //store new user
        const data = {
            "username": user,
            "password": hashedPwd
        };
        const newEntry = new userschema.Users(data)
        const save = await newEntry.save()
        if (save) {
            res.send('Message Sent')
        }
        else {
            res.send('Message not sent');
        }
    } catch (err) {
        res.status(500).json({ "message": err.message });
    }
    res.end();
})

router.post('/auth', async (req, res) => {
    const { user, pwd } = req.body;

    if (!user || !pwd) return res.status(400).json({ "Message": "Username and password are required." })
    const users = userschema.Users;
    const userData = await users.findOne({ username: user }).exec();

    if (!(userData)) {
        return res.sendStatus(401); // Unauthorized

    }

    const match = await bcrypt.compare(pwd, userData.password)

    if (match) {
        const roles = Object.values(userData.roles).filter(Boolean);
        //create JWTs
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "username": userData.username,
                    "roles": roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '10s' }
            //change above to 5 mins
        );
        const refreshToken = jwt.sign(
            { "username": userData.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }

        );

        //Saving refreshToken with current User.
        userData.refreshToken = refreshToken;
        const result = await userData.save();
        //console.log(result);

        //24 * 60 * 60 * 1000 = 1 day
        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'Lax', maxAge: 24 * 60 * 60 * 1000 });
        res.json({ accessToken })
    } else {
        res.sendStatus(401);
    }
})

module.exports = router