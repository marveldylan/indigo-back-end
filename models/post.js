const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Post = new Schema (
    {
        user_id: { type: Schema.Types.ObjectId, ref: 'users'},
        category_id: { type: Schema.Types.ObjectId, ref: 'categories'},
        group_id: { type: Schema.Types.ObjectId, ref: 'groups'},
        channel_id: { type: Schema.Types.ObjectId, ref: 'channels'},
        title: { type: String, required: true },
        content: { type: String, required: true },
        image: { type: String, required: false },
        video: { type: String, required: false },
        background: { type: String, required: false },
        tags: [{ type: String, required: false}],
        red_score: { type: Number, required: true },
        blue_score: { type: Number, required: true },
        indigo: { type: Number, default: function() {return (this.blue_score/this.red_score).toFixed(2)}, required: true },
        comments: [{ type: Schema.Types.ObjectId, ref: 'comments'}],
        comment_counter: {type: Number, default: function() {return (this.comments.length)}},
        views: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = Post