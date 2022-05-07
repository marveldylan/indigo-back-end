const Router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

//Routes
Router.get(
    '/:channel_id',
    controller.getPosts
)

Router.get(
    '/:channel_id/:post_id',
    controller.getPostById
)

Router.post(
    '/:channel_id/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.createPost
)

Router.put(
    '/:channel_id/:post_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.updatePost
)

Router.delete(
    '/:channel_id/:post_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.deletePost
)

module.exports = (
    Router
)
