const Router = require('express').Router()
const controller = require('../controllers/CategoryController')

//Routes
Router.get(
    '/',
    controller.getCategories
)

Router.get(
    '/:id',
    controller.getCategoryById
)

module.exports = (
    Router
)