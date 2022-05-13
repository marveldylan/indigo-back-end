const { default: mongoose } = require('mongoose')
const { Post } = require('../models')

const createPost = async (req, res) => {
    console.log(req.body)
    try {
        let channelId = req.params.channel_id
        let userId = req.params.user_id
        let postBody = {
            user_id: userId,
            channel_id: channelId,
            red_score: 0,
            blue_score: 0,
            indigo: 0,
            comment_counter: 0,
            views: 0,
            ...req.body
        }
        const post = await new Post(postBody)
        await post.save()
        return res.status(201).json({ post });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getPostsByChannel = async (req, res) => {
    try {
        const posts = await Post.find({
            channel_id: req.params.channel_id
        }).populate('user_id')
        return res.status(200).json({ posts })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getPostById = async (req, res) => {
    try {
        const postId  = req.params.post_id;
        const post = await Post.findById(postId)
        if (post) {
            return res.status(200).json({ post });
        }
        return res.status(404).send('Post with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}




const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.post_id, req.body, {
            new: true
        })
        res.json(post)
    } catch (error) {
        res.send(error.message)
    }
}

const addComment = async (req, res) => {
    try {
        let postId = req.params.post_id
        let commentId = req.params.comment_id;
        const post = await Post.findByIdAndUpdate(postId, {
            $push: {
                comments: commentId
            }
        })
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
}

const removeComment = async (req, res) => {
    try {
        let postId = req.params.post_id
        let commentId = req.params.comment_id;
        const post = await Post.findByIdAndUpdate(postId, {
            $pull: {
                comments: commentId
            }
        })
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
}

const deletePost = async (req, res) => {
    try {
        const postId  = req.params.post_id;
        const deleted = await Post.findByIdAndDelete(postId)
        if (deleted) {
            return res.status(200).send("Post deleted");
        }
        throw new Error("Whoops! Post not found!");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = {
    createPost,
    getPostsByChannel,
    getPostById,
    updatePost,
    addComment,
    removeComment,
    deletePost
}