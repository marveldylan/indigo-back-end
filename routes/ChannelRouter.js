const { Router } = require('express');
const router = Router()
const controller = require('../controllers/ChannelController')

//Routes
router.get(
    '/',
    controller.getChannels
)

router.get(
    '/:channel_id',
    controller.getChannelById
)

router.post(
    './:channel_id',
    controller.createChannel
)

router.put(
    '/:channel_id',
    controller.updateChannel
)

router.delete(
    '/:channel_id',
    controller.deleteChannel
)

module.exports = (
    router
)