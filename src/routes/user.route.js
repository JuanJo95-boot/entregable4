const { getAll, create, getOne, remove, update, login, logged  } = require('../controllers/user.controllers');
const express = require('express');
const { verifyJWT } = require('../utils/verifyJWT');
const { favorite } = require('../controllers/favorite.controllers');


const routerUser = express.Router();

routerUser.route('/')
    .get(verifyJWT, getAll)
    .post(create);


routerUser.route('/login')
    .post(login)

routerUser.route('/me')
    .get(verifyJWT,logged)

routerUser.route('/:id/posts')
     .post(verifyJWT, favorite)
    


routerUser.route('/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = routerUser;