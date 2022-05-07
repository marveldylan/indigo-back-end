const Router = require('express').Router()
const controller = require('../controllers/ChannelController')
const middleware = require('../middleware')

//Routes
Router.get(
    '/',
    controller.getChannels
)

Router.get(
    '/:id',
    controller.getChannelById
)

Router.post(
    '/',
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