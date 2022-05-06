const { default: mongoose } = require('mongoose')
const { Group } = require('../models')

const createGroup = async (req, res) => {
    console.log(req.body)
    try {
        const group = await new Group(req.body)
        await group.save()
        return res.status(201).json({ group });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getGroups = async (req, res) => {
    try {
        const groups = await Group.find()
        return res.status(200).json({ groups })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getGroupById = async (req, res) => {
    try {
        const { id } = req.params;
        const group = await Group.findById(id)
        if (group) {
            return res.status(200).json({ group });
        }
        return res.status(404).send('Group with the specified ID does not exists');
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
    updateGroup,
    deleteGroup
}