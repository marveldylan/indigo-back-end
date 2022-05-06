const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Comment = new Schema (
    {
        _id: { type: Schema.Types.ObjectId, required: true },
        user_id: { type: Schema.Types.ObjectId, ref: 'users'},
        channel_id: { type: Schema.Types.ObjectId, ref: 'channels'},
        group_id: { type: Schema.Types.ObjectId, ref: 'groups'},
        content: { type: String, required: true },
        background: { type: String, required: false },
        red_score: { type: Number, required: true },
        blue_score: { type: Number, required: true },
        indigo: { type: Number, required: true },
        comment_counter: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = Comment