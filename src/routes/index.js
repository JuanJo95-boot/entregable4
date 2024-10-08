const express = require('express');
const routerUser = require('./user.route');
const routerPost = require('./post.route');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', routerUser)
router.use('/posts', routerPost)
router.use('./favorites', routerUser)


module.exports = router;