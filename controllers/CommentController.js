const { default: mongoose } = require('mongoose')
const { Comment } = require('../models')

const createComment = async (req, res) => {
    console.log(req.body)
    try {
        let postId = req.params.post_id
        let userId = req.params.user_id
        let commentBody = {
            user_id: userId,
            post_id: postId,
            red_score: 0,
            blue_score: 0,
            indigo: 0,
            comment_counter: 0,
            ...req.body
        }
        const comment = await new Comment(commentBody)
        await comment.save()
        return res.status(201).json({ comment });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({
            post_id: req.params.post_id        
        })
        return res.status(200).json({ comments })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCommentsByUser = async (req, res) => {
    try {
        const comments = await Comment.find({
            user_id: req.params.user_id        
        })
        return res.status(200).json({ comments })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCommentById = async (req, res) => {
    try {
        const commentId = req.params.comment_id;
        const comment = await Comment.findById(commentId)
        if (comment) {
            return res.status(200).json({ comment });
        }
        return res.status(404).send('Comment with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}




const updateComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.comment_id, req.body, {
            new: true
        })
        res.json(comment)
    } catch (error) {
        res.send(error.message)
    }
}

const deleteComment = async (req, res) => {
    try {
        const commentId = req.params.comment_id;
        const deleted = await Comment.findByIdAndDelete(commentId)
        if (deleted) {
            return res.status(200).send("Comment deleted");
        }
        throw new Error("Whoops! Comment not found!");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = {
    createComment,
    getComments,
    getCommentsByUser,
    getCommentById,
    updateComment,
    deleteComment
}