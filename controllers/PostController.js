const { default: mongoose } = require('mongoose')
const { Post } = require('../models')

const createPost = async (req, res) => {
    console.log(req.body)
    try {
        const post = await new Post(req.body)
        await post.save()
        return res.status(201).json({ post });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        return res.status(200).json({ posts })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id)
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
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.json(post)
    } catch (error) {
        res.send(error.message)
    }
}

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Post.findByIdAndDelete(id)
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
    getPosts,
    getPostById,
    updatePost,
    deletePost
}