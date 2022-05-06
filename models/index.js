const { model } = require('mongoose');
const ChannelSchema = require('./channel');
const CommentSchema = require('./comment');
const GroupSchema = require('./group');
const PostSchema = require('./post');
const UserSchema = require('./user');

const Channel = model('channels', ChannelSchema);
const Comment = model('comments', CommentSchema);
const Group = model('groups', GroupSchema);
const Post = model('posts', PostSchema);
const User = model('users', UserSchema);

