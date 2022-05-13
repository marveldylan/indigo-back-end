const { default: mongoose } = require('mongoose')
const { User } = require('../models')

const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json({ users })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id)
        if (user) {
            return res.status(200).json({ user });
        }
        return res.status(404).send(`Oops! We can't seem to find this user.`);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
}

const userUnfollowCategory = async (req, res) => {
    try {
        let userId = req.params.id
        let categoryId = req.params.category_id;
        const user = await User.findByIdAndUpdate(userId, {
            $pull: {
                subscribed_categories: categoryId
            }
        })
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = {
    getUsers,
    getUserById,
    updateUser,
    userUnfollowCategory
}