const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

//Routes
Router.get(
    '/',
    controller.getUsers
)

Router.get(
    '/:user_id',
    controller.getUserById
)

Router.put(
    '/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.updateUser
)

Router.put(
    '/:user_id/follow/category/:category_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.userFollowCategory
)

Router.put(
    '/:user_id/unfollow/category/:category_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.userUnfollowCategory
)

Router.put(
    '/:user_id/follow/group/:group_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.userFollowGroup
)

Router.put(
    '/:user_id/unfollow/group/:group_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.userUnfollowGroup
)

Router.put(
    '/:user_id/disband/group/:group_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.userDisbandGroup
)

Router.put(
    '/:user_id/follow/channel/:channel_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.userFollowChannel
)

Router.put(
    '/:user_id/unfollow/channel/:channel_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.userUnfollowChannel
)


Router.put(
    '/:user_id/disband/channel/:channel_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.userDisbandChannel
)

Router.put(
    '/:user_id/remove/post/:post_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.userRemoveSavedPost
)

Router.put(
    '/:user_id/remove/post/:post_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.userRemoveUserPost
)

Router.put(
    '/:user_id/unfollow/user/:followed_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.userUnfollowUser
)


module.exports = (
    Router
)