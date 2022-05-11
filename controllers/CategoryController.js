const { default: mongoose } = require('mongoose')
const { Category } = require('../models')

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        return res.status(200).json({ categories })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id)
        if (category) {
            return res.status(200).json({ category });
        }
        return res.status(404).send('category with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = {
    getCategories,
    getCategoryById,
}