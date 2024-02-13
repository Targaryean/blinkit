const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const cors = require('cors');

import {registerUser, loginUser, getProfile} from '../controllers/authController.js'


//middleware
router.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getProfile)

module.exports = router