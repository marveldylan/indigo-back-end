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

Router.put(
    '/:id/unfollow/group/:group_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.userUnfollowGroup
)

Router.put(
    '/:id/disband/group/:group_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.userDisbandGroup
)

Router.put(
    '/:id/unfollow/channel/:channel_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.userUnfollowChannel
)

Router.put(
    '/:id/disband/channel/:channel_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.userDisbandChannel
)

Router.put(
    '/:id/disband/user/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.userDisbandUser
)

Router.put(
    '/:id/unfollow/user/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.userUnfollowUser
)


module.exports = (
    Router
)