const Router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

//Routes
Router.get(
    '/:post_id',
    controller.getComments
)

Router.get(
    '/:post_id/:comment_id',
    controller.getCommentById
)

Router.post(
    '/:post_id',
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
    '/:post_id/:comment_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.deleteComment
)

module.exports = (
    Router
)