const { default: mongoose } = require('mongoose');
const db = require('../db')
const {Channel, Comment, Group, Category, Post, User} = require('../models')

db.on('error', console.error.bind(console, 'MongoDb connection error:'));
// Images for seed data taken from Unsplash.com
const createCategories = async () => {
    const categories = [
        {
            name: 'Music',
            cover_image: 'https://i.imgur.com/qpuXD6R.jpg',
            channel_counter: 21,
            follower_counter: 1250
        },
        {
            name: 'Sports',
            cover_image: 'https://i.imgur.com/w2Rlgyw.jpg',
            channel_counter: 27,
            follower_counter: 6588
        },
        {
            name: 'Design',
            cover_image: 'https://i.imgur.com/b59Z2fW.jpg',
            channel_counter: 17,
            follower_counter: 856
        },
        {
            name: 'Programming',
            cover_image: 'https://i.imgur.com/0uI10hk.jpg',
            channel_counter: 34,
            follower_counter: 8093
        },
        {
            name: 'Art',
            cover_image: 'https://i.imgur.com/RQWLdNs.jpg',
            channel_counter: 14,
            follower_counter: 1250
        },
        {
            name: 'Photography',
            cover_image: 'https://i.imgur.com/ZFbkAYx.jpg',
            channel_counter: 37,
            follower_counter: 14000
        },
        {
            name: 'Gaming',
            cover_image: 'https://i.imgur.com/kL7Xylm.jpg',
            channel_counter: 62,
            follower_counter: 21420
        },
        {
            name: 'Crypto',
            cover_image: 'https://i.imgur.com/SkKwgCv.jpg',
            channel_counter: 42,
            follower_counter: 17200
        },
        {
            name: 'Science',
            cover_image: 'https://i.imgur.com/dkuOtC7.jpg',
            channel_counter: 16,
            follower_counter: 12200
        },
        {
            name: 'Real Estate',
            cover_image: 'https://i.imgur.com/pOZ6mKF.jpg',
            channel_counter: 57,
            follower_counter: 22510,
        },
        {
            name: 'Cooking',
            cover_image: 'https://i.imgur.com/Hl4QWT8.jpg',
            channel_counter: 42,
            follower_counter: 28800
        },
        {
            name: 'Baking',
            cover_image: 'https://i.imgur.com/KSWGXJT.jpg',
            channel_counter: 63,
            follower_counter: 38600
        },

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

const createChannels = async () => {
    // const channels = [
    //     {
    //         user_id: ,
    //         group_id: ,
    //         tags: [],
    //         name: 'Audio Engineering 101',
    //         cover_image: 'null',
    //         red_score: 540,
    //         blue_score: 960,
    //         indigo: 0,
    //         follower_counter: 500,
    //         post_counter: 32,
    //         views: 10000
    //     },
    //     {
    //         user_id: ,
    //         group_id: ,
    //         tags: [],
    //         name: 'Audio Engineering 101',
    //         cover_image: 'null',
    //         red_score: 540,
    //         blue_score: 960,
    //         indigo: 0,
    //         follower_counter: 500,
    //         post_counter: 32,
    //         views: 10000
    //     }

    // ]
}

const createPosts = async () => {

}

const createComments = async () => {

}

const run = async () => {
    await createCategories();
    // await createUsers();
    // await createChannels();
    // await createPosts();
    // await createComments()
}

run()