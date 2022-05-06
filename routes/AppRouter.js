const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const ChannelRouter = require('./ChannelRouter')
const CommentRouter = require('./CommentRouter')
const GroupRouter = require('./GroupRouter')
const PostRouter = require('./PostRouter')
const UserRouter = require('./UserRouter')

Router.use('./auth', AuthRouter)
Router.use('./channels', ChannelRouter)
Router.use('./comments', CommentRouter)
Router.use('./groups', GroupRouter)
Router.use('./posts', PostRouter)
Router.use('./users', UserRouter)

module.exports = (
    Router
)

