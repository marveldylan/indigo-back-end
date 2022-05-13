const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Comment = new Schema (
    {
        user_id: { type: Schema.Types.ObjectId, ref: 'users'},
        post_id: { type: Schema.Types.ObjectId, ref: 'posts'},
        content: { type: String, required: true },
        background: { type: String, required: false },
        red_score: { type: Number, required: true },
        blue_score: { type: Number, required: true },
        indigo: { type: Number, default: function() {return (this.blue_score/this.red_score).toFixed(2)}, required: true },
        comment_counter: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = Comment