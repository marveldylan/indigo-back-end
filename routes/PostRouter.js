const { Router } = require('express');
const router = Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

//Routes
//Routes
router.get(
    '/',
    controller.getPosts
)

router.get(
    '/:post_id',
    controller.getPostById
)

router.post(
    './:post_id',
    controller.createPost
)

router.put(
    '/:post_id',
    controller.updatePost
)

router.delete(
    '/:post_id',
    controller.deletePost
)

module.exports = (
    router
)

module.exports = (
    Router
)