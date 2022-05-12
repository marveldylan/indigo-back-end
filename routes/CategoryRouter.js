const Router = require('express').Router()
const controller = require('../controllers/CategoryController')
const middleware = require('../middleware')

//Routes
Router.get(
    '/',
    controller.getCategories
)

Router.get(
    '/:id',
    controller.getCategoryById
)

Router.put(
    '/:id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.updateCategory
)

module.exports = (
    Router
)