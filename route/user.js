const express = require('express');
const router = express.Router();

const { CreateUser } = require('../controller/sign_Up')
const { SignIn } = require('../controller/sign_In');

router.post('/api/SignUp', CreateUser)
router.post('/api/SignIn', SignIn)

module.exports = router;