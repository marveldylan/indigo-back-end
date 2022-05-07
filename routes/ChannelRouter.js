const Router = require('express').Router()
const controller = require('../controllers/ChannelController')
const middleware = require('../middleware')

//Routes
Router.get(
    '/',
    controller.getChannels
)

Router.get(
    '/group/:group_id',
    controller.getChannelsByGroup
)

Router.get(
    '/user/:user_id',
    controller.getChannelsByUser
)

Router.get(
    '/:id',
    controller.getChannelById
)

Router.post(
    '/:group_id/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.createChannel
)

Router.put(
    '/:id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.updateChannel
)

Router.delete(
    '/:id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.deleteChannel
)

module.exports = (
    Router
)