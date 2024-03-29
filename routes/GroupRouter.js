const Router = require('express').Router()
const controller = require('../controllers/GroupController')
const middleware = require('../middleware')

//Routes
Router.get(
    '/',
    controller.getGroups
)

Router.get(
    '/:id',
    controller.getGroupById
)

Router.get(
    '/category/:category_id',
    controller.getGroupsByCategory
)

Router.get(
    '/user/:user_id',
    controller.getGroupsByUser
)

Router.post(
    '/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.createGroup
)

Router.put(
    '/:id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.updateGroup
)

Router.delete(
    '/:id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.deleteGroup
)

module.exports = (
    Router
)