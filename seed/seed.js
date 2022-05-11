const { default: mongoose } = require('mongoose');
const db = require('../db')
const {Channel, Comment, Group, Category, Post, User} = require('../models')
const Chance = require('chance');
const { post } = require('../models/channel');

const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDb connection error:'));
// Images for seed data taken from Unsplash.com
const createCategories = async () => {
    const categories = [
        {
            name: 'Music',
            cover_image: 'https://i.imgur.com/qpuXD6R.jpg',
            group_counter: Math.floor(Math.random * 30),
            follower_counter: 1250
        },
        {
            name: 'Sports',
            cover_image: 'https://i.imgur.com/w2Rlgyw.jpg',
            group_counter: Math.floor(Math.random * 30),
            follower_counter: 6588
        },
        {
            name: 'Design',
            cover_image: 'https://i.imgur.com/b59Z2fW.jpg',
            group_counter: Math.floor(Math.random * 30),
            follower_counter: 856
        },
        {
            name: 'Programming',
            cover_image: 'https://i.imgur.com/0uI10hk.jpg',
            group_counter: Math.floor(Math.random * 30),
            follower_counter: 8093
        },
        {
            name: 'Art',
            cover_image: 'https://i.imgur.com/RQWLdNs.jpg',
            group_counter: Math.floor(Math.random * 30),
            follower_counter: 1250
        },
        {
            name: 'Photography',
            cover_image: 'https://i.imgur.com/ZFbkAYx.jpg',
            group_counter: Math.floor(Math.random * 30),
            follower_counter: 14000
        },
        {
            name: 'Gaming',
            cover_image: 'https://i.imgur.com/kL7Xylm.jpg',
            group_counter: Math.floor(Math.random * 30),
            follower_counter: 21420
        },
        {
            name: 'Crypto',
            cover_image: 'https://i.imgur.com/SkKwgCv.jpg',
            group_counter: Math.floor(Math.random * 30),
            follower_counter: 17200
        },
        {
            name: 'Science',
            cover_image: 'https://i.imgur.com/dkuOtC7.jpg',
            group_counter: Math.floor(Math.random * 30),
            follower_counter: 12200
        },
        {
            name: 'Real Estate',
            cover_image: 'https://i.imgur.com/pOZ6mKF.jpg',
            group_counter: Math.floor(Math.random * 30),
            follower_counter: 22510,
        },
        {
            name: 'Cooking',
            cover_image: 'https://i.imgur.com/Hl4QWT8.jpg',
            group_counter: Math.floor(Math.random * 30),
            follower_counter: 28800
        },
        {
            name: 'Baking',
            cover_image: 'https://i.imgur.com/KSWGXJT.jpg',
            group_counter: Math.floor(Math.random * 30),
            follower_counter: 38600
        },
        {
            name: 'Finance & Accounting',
            cover_image: 'https://i.imgur.com/t8BaOim.jpg',
            group_counter: Math.floor(Math.random * 30),
            follower_counter: 2,
        },
        {
            name: 'Health & Wellness',
            cover_image: 'https://i.imgur.com/YFVJUlc.jpg',
            group_counter: Math.floor(Math.random * 30),
            follower_counter: 2,
        }

    ]

    await Category.insertMany(categories);
    console.log('Created some categories!');
    return categories;
}
const createUsers = async () => {
    // const users = [
    //     {
    //         first_name: 'John',
    //         last_name: 'Smith',
    //         email: 'jjohn@ex.com',
    //         password_digest: 'YBKDTOWjalsfj9fjksdla',
    //         about: `Hey I'm john nice to meet you. I love life and such.`,
    //         profile_image: 'null',
    //         cover_image: 'null',
    //         post_background: 'null',
    //         comment_background: 'null',
    //         red_score: 0,
    //         blue_score: 0,
    //         indigo: 0
    //     },
    //     {
    //         first_name: 'Marty',
    //         last_name: 'McFly',
    //         email: 'flyboin@ex.com',
    //         password_digest: 'YBKDTOWjalsafgaa',
    //         about: `I've gotta go back to the future!`,
    //         profile_image: 'null',
    //         cover_image: 'null',
    //         post_background: 'null',
    //         comment_background: 'null',
    //         red_score: 0,
    //         blue_score: 0,
    //         indigo: 0
    //     },

    // ]

    // await User.insertMany(users);
    // console.log('Created some users!');
    // return users;
}

const createGroups = async () => {

    const music = await Category.find({ name: 'Music' })
    const sports = await Category.find({ name: 'Sports' })
    const design = await Category.find({ name: 'Design' })
    const programming = await Category.find({ name: 'Programming' })
    const art = await Category.find({ name: 'art' })
    const photography = await Category.find({ name: 'Photography' })
    const gaming = await Category.find({ name: 'Gaming' })
    const crypto = await Category.find({ name: 'Crypto' })
    const science = await Category.find({ name: 'Science' })
    const realEstate = await Category.find({ name: 'Real Estate' })
    const cooking = await Category.find({ name: 'Coooking' })
    const baking = await Category.find({ name: 'Baking' })
    const finance = await Category.find({ name: 'Finance & Accounting' })
    const health = await Category.find({name: 'Health & Wellness'})

    const groups = [

        {
            user_id: "62795b9f4b281fbbe2ed3917",
            category_id: sports[0]._id,
            name: 'Tennis',
            cover_image: 'https://i.imgur.com/qKavVar.jpg',
            red_score: 0,
            blue_score: 0,
            channel_counter: 2,
            follower_counter: 0,
            views: 0,
        },
        {
            user_id: "62795b9f4b281fbbe2ed3917",
            category_id: music[0]._id,
            name: 'Instruments',
            cover_image: 'https://i.imgur.com/qKavVar.jpg',
            red_score: 950,
            blue_score: 2210,
            channel_counter: 2,
            follower_counter: 6100,
            views: 21402,
        },

    ]
    await Group.insertMany(groups);
    console.log('Created some groups!');
    return groups;
}


const createChannels = async () => {
    const instruments = await Group.find({ name: 'Instruments' })
    const tennis = await Group.find({ name: 'Tennis' })

    const channels = [
        {
            user_id: "62795b9f4b281fbbe2ed3917",
            group_id: instruments[0]._id,
            tags: ['music', 'instrument', 'guitar', 'artist'],
            name: 'Learn Guitar Super Fast!',
            cover_image: 'https://i.imgur.com/zwGJhz9.jpg',
            red_score: 540,
            blue_score: 960,
            follower_counter: 500,
            post_counter: 30,
            views: 10000
        },
        {
            user_id: "62795b9f4b281fbbe2ed3917",
            group_id: instruments[0]._id,
            tags: ['music', 'instrument', 'piano', 'artist'],
            name: 'Learn Piano Super Fast!',
            cover_image: 'https://i.imgur.com/7UWNgou.jpg',
            red_score: 410,
            blue_score: 1250,
            follower_counter: 5600,
            post_counter: 45,
            views: 11402
        },
        {
            user_id: "62795b9f4b281fbbe2ed3917",
            group_id: tennis[0]._id,
            tags: ['sports', 'tennis'],
            name: 'Tennis Tips',
            cover_image: 'https://i.imgur.com/86DzrcQ.jpg',
            red_score: 120,
            blue_score: 1250,
            follower_counter: 320,
            post_counter: 20,
            views: 9800
        },
        {
            user_id: "62795b9f4b281fbbe2ed3917",
            group_id: tennis[0]._id,
            tags: ['sports', 'tennis'],
            name: 'How to Serve',
            cover_image: 'https://i.imgur.com/LTzPcjp.jpg',
            red_score: 300,
            blue_score: 1980,
            follower_counter: 2600,
            post_counter: 40,
            views: 12500
        }

    ]
    await Channel.insertMany(channels);
    console.log('Created some channels!');
    return channels;
}

const createPosts = async () => {
    const learnGuitar = await Channel.find({ name: 'Learn Guitar Super Fast!' })
    const learnPiano = await Channel.find({ name: 'Learn Piano Super Fast!' })
    const tennisTips = await Channel.find({ name: 'Tennis Tips'})
    const tennisServe = await Channel.find({ name: 'How to Serve'})

    const guitarPosts = [...Array(30)].map((post => {
        return new Post({
            user_id: learnGuitar[0].user_id,
            channel_id: learnGuitar[0]._id,
            title: chance.sentence(),
            content: chance.paragraph(),
            red_score: Math.round(Math.random() * 10000),
            blue_score: Math.round(Math.random() * 10000),
            comment_counter: Math.round(Math.random() * 1000),
            views: Math.round(Math.random() * 100000)
        })
    }))
    const pianoPosts = [...Array(45)].map((post => {
        return new Post({
            user_id: learnPiano[0].user_id,
            channel_id: learnPiano[0]._id,
            title: chance.sentence(),
            content: chance.paragraph(),
            red_score: Math.round(Math.random() * 10000),
            blue_score: Math.round(Math.random() * 10000),
            comment_counter: Math.round(Math.random() * 1000),
            views: Math.round(Math.random() * 100000)
        })
    }))
    const tennisTipPosts = [...Array(20)].map((post => {
        return new Post({
            user_id: tennisTips[0].user_id,
            channel_id: tennisTips[0]._id,
            title: chance.sentence(),
            content: chance.paragraph(),
            red_score: Math.round(Math.random() * 10000),
            blue_score: Math.round(Math.random() * 10000),
            comment_counter: Math.round(Math.random() * 1000),
            views: Math.round(Math.random() * 100000)
        })
    }))
    const tennisServePosts = [...Array(20)].map((post => {
        return new Post({
            user_id: tennisServe[0].user_id,
            channel_id: tennisServe[0]._id,
            title: chance.sentence(),
            content: chance.paragraph(),
            red_score: Math.round(Math.random() * 10000),
            blue_score: Math.round(Math.random() * 10000),
            comment_counter: Math.round(Math.random() * 1000),
            views: Math.round(Math.random() * 100000)
        })
    }))
    await Post.insertMany(guitarPosts);
    await Post.insertMany(pianoPosts);
    await Post.insertMany(tennisTipPosts);
    await Post.insertMany(tennisServePosts);
    console.log('Created posts for Learn Guitar Channel, Piano, Tennis Tips, Tennis Serve Channels!')
    return {guitarPosts, pianoPosts, tennisTipPosts, tennisServePosts} 
}

const createComments = async () => {

}

const run = async () => {
    // await createCategories();
    // await createGroups();
    // await createUsers();
    // await createChannels();
    await createPosts();
    // await createComments()
}

run()