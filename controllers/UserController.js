const { default: mongoose } = require('mongoose')
const { User } = require('../models')

const getUser = async (req, res) => {
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

module.exports(
    getUser,
    getUserById
)