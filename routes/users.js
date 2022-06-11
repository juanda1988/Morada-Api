const express = require('express');
const router = express.Router();
const { login, signup, getUser } = require('../controllers/usersCtrl');


router.post('/login', login);
router.post('/signup', signup);
router.get('/info', getUser);

module.exports = router;