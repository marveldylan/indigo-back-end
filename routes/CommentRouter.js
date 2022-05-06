const { Router } = require('express');
const router = Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

//Routes
//Routes
router.get(
    '/',
    controller.getComments
)

router.get(
    '/:comment_id',
    controller.getCommentById
)

router.post(
    './:comment_id',
    controller.createComment
)

router.put(
    '/:comment_id',
    controller.updateComment
)

router.delete(
    '/:comment_id',
    controller.deleteComment
)

module.exports = (
    router
)
module.exports = (
    Router
)