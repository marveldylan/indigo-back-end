const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Group = new Schema (
    {
        user_id: { type: Schema.Types.ObjectId, ref: 'users'},
        category_id: { type: Schema.Types.ObjectId, ref: 'categories'},
        name: { type: String, required: true },
        cover_image: { type: String, required: false },
        theme: { type: String, required: false},
        red_score: { type: Number, required: true },
        blue_score: { type: Number, required: true },
        indigo: { type: Number, default: function() {return (this.blue_score/this.red_score).toFixed(2)}, required: true },
        channel_counter: { type: Number, required: true },
        follower_counter: { type: Number, required: true },
        views: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = Group