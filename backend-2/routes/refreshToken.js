const express = require('express')
const router = express.Router()
const userschema = require('../models/User')
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.get('/refresh', async (req, res) => {
    const cookies = req.cookies;
    // console.log(cookies?.jwt);
    if (!cookies?.jwt) return res.sendStatus(401);
    // console.log(cookies);
    const refreshToken = cookies.jwt;
    // console.log(refreshToken);
    const users = userschema.Users;
    const userData = await users.findOne({ refreshToken }).exec();

    if (!(userData)) {

        return res.sendStatus(403); // Forbidden
    }
    // evaluate jwt

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || userData.username !== decoded.username) {
                return res.sendStatus(403);
            }
            const roles = Object.values(userData.roles);
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "username": decoded.username,
                        "roles": roles
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '10s' }
            );
            res.json({ accessToken })
        }
    );
})

module.exports = router;