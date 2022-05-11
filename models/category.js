const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Category = new Schema (
    {
        name: { type: String, required: true },
        cover_image: { type: String, required: true },
        group_counter: { type: Number, required: true },
        follower_counter: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = Category