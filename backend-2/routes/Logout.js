const express = require('express')
const router = express.Router()
const userschema = require('../models/User')

require('dotenv').config();

router.get('/logout', async (req, res) => {

    // On client, also delete the accessToken

    const cookies = req.cookies;

    if (!cookies?.jwt) return res.sendStatus(204); //No content

    const refreshToken = cookies.jwt;

    //Is refresh token in db?
    const users = userschema.Users;
    const userData = await users.findOne({ refreshToken }).exec();

    if (!(userData)) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'Lax', maxAge: 24 * 60 * 60 * 1000 });
        return res.sendStatus(204);
    }

    //Delete refreshToken in db
    userData.refreshToken = '';
    const result = await userData.save();
    // console.log(result);

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'Lax' }); //secure: true - only serves on https
    res.sendStatus(204);

})

module.exports = router;