const mongoose = require('mongoose');
const Schema = mongoose.Schema

const User = new Schema (
    {
        _id: { type: Schema.Types.ObjectId, required: true },
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type: String, required: true},
        password_digest: { type: String, required: true },
        about: { type: String, required: false },
        profile_image: { type: String, required: false },
        cover_image: { type: String, required: false },
        post_background: { type: String, required: false },
        comment_background: { type: String, required: false },
        red_score: { type: Number, required: true },
        blue_score: { type: Number, required: true },
        indigo: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = User