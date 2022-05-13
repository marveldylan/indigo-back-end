const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

//Routes
Router.get(
    '/',
    controller.getUsers
)

Router.get(
    '/:id',
    controller.getUserById
)

Router.put(
    '/:id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.updateUser
)

Router.put(
    '/:id/unfollow/category/:category_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.userUnfollowCategory
)

module.exports = (
    Router
)