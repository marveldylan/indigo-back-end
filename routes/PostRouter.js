const Router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

//Routes
Router.get(
    '/channel/:channel_id',
    controller.getPostsByChannel
)

Router.get(
    '/user/:user_id',
    controller.getPostsByUser
)

Router.get(
    '/:post_id',
    controller.getPostById
)

Router.post(
    '/:channel_id/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.createPost
)

Router.put(
    '/:post_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.updatePost
)

Router.put(
    '/:post_id/comment/:comment_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.addComment
)

Router.put(
    '/:post_id/comment/:comment_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.removeComment
)

Router.delete(
    '/:post_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.deletePost
)

module.exports = (
    Router
)
