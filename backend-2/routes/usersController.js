const userschema = require('../models/User')

require('dotenv').config();

const getAllUsers = async (req, res) => {
    const users = userschema.Users;
    const userData = await users.find({}).exec();
    if (!userData) return res.status(204).json({ 'message': 'No users found' })
    if (userData) {
        res.send(JSON.stringify(userData));
    }
}

const deleteUser = async (req, res) => {
    const users = userschema.Users;
    const { username } = req.body
    const userData = await users.findOne({ "username": username }).exec();
    if (!userData) {
        return res.status(400).json({ "message": `User ${username} not found` });
    }
    const result = await users.deleteOne({ username: username });
    res.json(result);

}

const getUser = async (req, res) => {
    const users = userschema.Users;
    const { username } = req.body
    const userData = await users.findOne({ "username": username }).exec();
    if (!userData) {
        return res.status(400).json({ "message": `User ${username} not found` });
    }
    else {
        res.send(JSON.stringify(userData));
    }
}

module.exports = {
    getAllUsers,
    deleteUser,
    getUser
}