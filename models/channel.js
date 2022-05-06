const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Channel = new Schema (
    {
        _id: { type: Schema.Types.ObjectId, required: true },
        user_id: { type: Schema.Types.ObjectId, ref: 'users'},
        group_id: { type: Schema.Types.ObjectId, ref: 'group'},
        name: { type: String, required: true },
        cover_image: { type: String, required: false },
        red_score: { type: Number, required: true },
        blue_score: { type: Number, required: true },
        indigo: { type: Number, required: true },
        follower_counter: { type: Number, required: true },
        post_counter: { type: Number, required: true },
        views: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = Channel