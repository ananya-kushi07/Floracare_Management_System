const express = require('express');
const { userLogin, userLogout, userSignup, userProfile } = require('../controllers/userController');
const authorizor = require('../middlewares/authorizor');
const authenticatorLocal = require('../middlewares/authenticatorLocal');
const userRouter = express.Router();

userRouter.post('/login', userLogin);
userRouter.post('/signup',
    //  authenticatorLocal, authorizor(['admin']),
      userSignup);
userRouter.post('/logout',
    //  authenticatorLocal, authorizor(['admin','coordinator','volunteer','participant','mentor']),
      userLogout);
userRouter.get('/profile', 
    authenticatorLocal, 
    // authorizor(['admin','coordinator','volunteer','participant','mentor']),
     userProfile);

module.exports = userRouter;