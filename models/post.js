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
        background: { type: String, required: false },
        tags: [{ type: String, required: false}],
        red_score: { type: Number, required: true },
        blue_score: { type: Number, required: true },
        indigo: { type: Number, default: function() {return (this.red_score / this.blue_score).toFixed(2)}, required: true },
        comment_counter: { type: Number, required: true },
        views: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = Post