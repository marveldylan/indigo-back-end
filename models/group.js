const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Group = new Schema (
    {
        user_id: { type: Schema.Types.ObjectId, ref: 'users'},
        name: { type: String, required: true },
        tags: [{ type: String, required: false}],
        cover_image: { type: String, required: false },
        red_score: { type: Number, required: true },
        blue_score: { type: Number, required: true },
        indigo: { type: Number, required: true },
        channel_counter: { type: Number, required: true },
        follower_counter: { type: Number, required: true },
        views: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = Group