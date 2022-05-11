const mongoose = require('mongoose');
const Schema = mongoose.Schema

const User = new Schema (
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        username: { type:String, required: true },
        email: { type: String, required: true},
        password_digest: { type: String, required: true },
        about: { type: String, required: false },
        profile_image: { type: String, required: false },
        cover_image: { type: String, required: false },
        post_background: { type: String, required: false },
        comment_background: { type: String, required: false },
        red_score: { type: Number, required: true },
        blue_score: { type: Number, required: true },
        indigo: { type: Number, default: function() {return (this.red_score / this.blue_score).toFixed(2)}, required: true },
        user_groups: [{ type: Schema.Types.ObjectId, ref:'groups'}],
        subscribed_groups: [{ type: Schema.Types.ObjectId, ref:'groups'}],
        user_channels: [{ type: Schema.Types.ObjectId, ref: 'channels' }],
        subscribed_channels: [{ type: Schema.Types.ObjectId, ref: 'channels' }],
        user_comments: [{ type: Schema.Types.ObjectId, ref: 'channels' }],
        user_posts: [{ type: Schema.Types.ObjectId, ref: 'posts' }],
        saved_posts: [{ type: Schema.Types.ObjectId, ref: 'posts' }],
        following: [{ type: Schema.Types.ObjectId, ref: 'users' }],
        followers: [{ type: Schema.Types.ObjectId, ref: 'users' }]
    },
    { timestamps: true },
)

module.exports = User