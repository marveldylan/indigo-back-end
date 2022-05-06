const { Router } = require('express');
const router = Router()
const controller = require('../controllers/GroupController')
const middleware = require('../middleware')

//Routes
//Routes
router.get(
    '/',
    controller.getGroups
)

router.get(
    '/:group_id',
    controller.getGroupById
)

router.post(
    './:group_id',
    controller.createGroup
)

router.put(
    '/:group_id',
    controller.updateGroup
)

router.delete(
    '/:group_id',
    controller.deleteGroup
)

module.exports = (
    router
)
module.exports = (
    Router
)