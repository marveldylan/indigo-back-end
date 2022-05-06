const { default: mongoose } = require('mongoose')
const { Channel } = require('../models')

const createChannel = async (req, res) => {
    console.log(req.body)
    try {
        const channel = await new Channel(req.body)
        await channel.save()
        return res.status(201).json({ channel });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getChannels = async (req, res) => {
    try {
        const channels = await Channel.find()
        return res.status(200).json({ channels })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getChannelById = async (req, res) => {
    try {
        const { id } = req.params;
        const channel = await Channel.findById(id)
        if (channel) {
            return res.status(200).json({ channel });
        }
        return res.status(404).send('Channel with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}




const updateChannel = async (req, res) => {
    try {
        const channel = await Channel.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.json(channel)
    } catch (error) {
        res.send(error.message)
    }
}

const deleteChannel = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Channel.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Channel deleted");
        }
        throw new Error("Whoops! Channel not found!");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = {
    createChannel,
    getChannels,
    getChannelById,
    updateChannel,
    deleteChannel
}