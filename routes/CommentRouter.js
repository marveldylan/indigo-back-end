const Router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

//Routes
Router.get(
    '/post/:post_id',
    controller.getComments
)

Router.get(
    '/:comment_id',
    controller.getCommentById
)

Router.get(
    '/user/:user_id'
)

Router.post(
    '/:post_id/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.createComment
)

Router.put(
    '/:post_id/:comment_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.updateComment
)

Router.delete(
    '/:comment_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.deleteComment
)

module.exports = (
    Router
)