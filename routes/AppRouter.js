const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const ChannelRouter = require('./ChannelRouter')
const CommentRouter = require('./CommentRouter')
const GroupRouter = require('./GroupRouter')
const PostRouter = require('./PostRouter')
const UserRouter = require('./UserRouter')

Router.use('./auth', AuthRouter)
Router.use('./channel', ChannelRouter)
Router.use('./comment', CommentRouter)
Router.use('./group', GroupRouter)
Router.use('./post', PostRouter)
Router.use('./user', UserRouter)

module.exports = Router

