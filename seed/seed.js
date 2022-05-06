const { default: mongoose } = require('mongoose');
const db = require('../db')
const {Channel, Comment, Group, Post} = require('../models')
const faker = require('faker')

db.on('error', console.error.bind(console, 'MongoDb connection error:'));

