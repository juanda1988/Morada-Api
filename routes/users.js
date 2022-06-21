const express = require('express');
const router = express.Router();
const authVerify = require('../middleware/authVerify');
const { login, signup, getUser, favorites, getUserFavorites } = require('../controllers/usersCtrl');


router.post('/login', login);
router.post('/signup', signup);
router.get('/info',authVerify, getUser);
router.post('/favorites',favorites);
router.get('/',getUserFavorites)

module.exports = router;