const { default: mongoose } = require('mongoose')
const { Group } = require('../models')

const createGroup = async (req, res) => {
    console.log(req.body)
    try {
        let userId = req.params.user_id
        let groupBody = {
            user_id: userId,
            red_score: 0,
            blue_score: 0,
            indigo: 0,
            channel_counter: 0,
            follower_counter: 0,
            views: 0,
            ...req.body
        }
        const group = await new Group(groupBody)
        await group.save()
        return res.status(201).json({ group });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getGroups = async (req, res) => {
    try {
        const groups = await Group.find().populate('user_id')
        return res.status(200).json({ groups })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getGroupById = async (req, res) => {
    try {
        const { id } = req.params;
        const group = await Group.findById(id).populate('user_id')
        if (group) {
            return res.status(200).json({ group });
        }
        return res.status(404).send('Group with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getGroupsByCategory = async (req, res) => {
    try {
        let categoryId = req.params.category_id;
        const groups = await Group.find({
            category_id: categoryId
        })
        .populate('user_id')
        if (groups) {
            return res.status(200).json({ groups });
        }
        return res.status(404).send('Groups with the specified Category ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getGroupsByUser = async (req, res) => {
    try {
        let userId = req.params.user_id;
        const groups = await Group.find({
            user_id: userId
        })
        .populate('user_id')
        if (groups) {
            return res.status(200).json({ groups });
        }
        return res.status(404).send('Groups with the specified User ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



const updateGroup = async (req, res) => {
    try {
        const group = await Group.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.json(group)
    } catch (error) {
        res.send(error.message)
    }
}

const deleteGroup = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Group.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Group deleted");
        }
        throw new Error("Whoops! Group not found!");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = {
    createGroup,
    getGroups,
    getGroupById,
    getGroupsByCategory,
    getGroupsByUser,
    updateGroup,
    deleteGroup
}