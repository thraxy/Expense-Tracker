const express = require('express')
const router = express.Router();
const usersController = require('../routes/usersController')
const ROLES_LIST = require('../config/roles_list');
const verifyRoles = require("../middleware/verifyRoles");

router.route('/')
    .get(verifyRoles(ROLES_LIST.Admin), usersController.getAllUsers)
    .delete(verifyRoles(ROLES_LIST.Admin), usersController.deleteUser);

router.route('/one')
    .get(usersController.getUser);

module.exports = router;
    