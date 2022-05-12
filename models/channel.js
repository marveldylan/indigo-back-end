const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Channel = new Schema (
    {
        user_id: { type: Schema.Types.ObjectId, ref: 'users' },
        category_id: {type: Schema.Types.ObjectId, ref: 'categories' },
        group_id: { type: Schema.Types.ObjectId, ref: 'group' },
        tags: [{ type: String, required: false}],
        name: { type: String, required: true },
        cover_image: { type: String, required: false },
        theme: { type: String, required: false},
        red_score: { type: Number, required: true },
        blue_score: { type: Number, required: true },
        indigo: { type: Number, default: function() {return (this.red_score / this.blue_score).toFixed(2)}, required: true },
        follower_counter: { type: Number, required: true },
        post_counter: { type: Number, required: true },
        views: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = Channel