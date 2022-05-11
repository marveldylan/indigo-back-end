const { default: mongoose } = require('mongoose');
const db = require('../db')
const {Channel, Comment, Group, Post, User} = require('../models')

db.on('error', console.error.bind(console, 'MongoDb connection error:'));
// Images for seed data taken from Unsplash.com
const createGroups = async () => {
    const groups = [
        {
            name: 'Music',
            cover_image: 'https://i.imgur.com/qpuXD6R.jpg',
            theme: 'Light',
            red_score: 680,
            blue_score: 5423,
            indigo: 7.98,
            channel_counter: 21,
            follower_counter: 1250,
            views: 54554
        },
        {
            name: 'Sports',
            cover_image: 'https://i.imgur.com/w2Rlgyw.jpg',
            red_score: 2134,
            blue_score: 12502,
            indigo: 5.85,
            channel_counter: 27,
            follower_counter: 6588,
            views: 98221
        },
        {
            name: 'Design',
            cover_image: 'https://i.imgur.com/b59Z2fW.jpg',
            red_score: 110,
            blue_score: 4030,
            indigo: 36.6,
            channel_counter: 17,
            follower_counter: 856,
            views: 19021
        },
        {
            name: 'Programming',
            cover_image: 'https://i.imgur.com/0uI10hk.jpg',
            red_score: 520,
            blue_score: 11201,
            indigo:21.5,
            channel_counter: 34,
            follower_counter: 8093,
            views: 120271
        },
        {
            name: 'Art',
            cover_image: 'https://i.imgur.com/RQWLdNs.jpg',
            theme: 'Light',
            red_score: 320,
            blue_score: 3756,
            indigo: 11.73,
            channel_counter: 14,
            follower_counter: 1250,
            views: 38004
        },
        {
            name: 'Photography',
            cover_image: 'https://i.imgur.com/ZFbkAYx.jpg',
            theme: 'Light',
            red_score: 387,
            blue_score: 12301,
            indigo: 31.78,
            channel_counter: 37,
            follower_counter: 14000,
            views: 103421
        },
        {
            name: 'Gaming',
            cover_image: 'https://i.imgur.com/kL7Xylm.jpg',
            theme: 'Dark',
            red_score: 2760,
            blue_score: 18886,
            indigo: 6.84,
            channel_counter: 62,
            follower_counter: 21420,
            views: 163408
        },
        {
            name: 'Cryto',
            cover_image: 'https://i.imgur.com/SkKwgCv.jpg',
            theme: 'Dark',
            red_score: 6270,
            blue_score: 8850,
            indigo: 1.41,
            channel_counter: 42,
            follower_counter: 17200,
            views: 193408
        },
        {
            name: 'Science',
            cover_image: 'https://i.imgur.com/dkuOtC7.jpg',
            theme: 'Light',
            red_score: 210,
            blue_score: 8840,
            indigo: 42.09,
            channel_counter: 16,
            follower_counter: 12200,
            views: 65700
        },
        {
            name: 'Real Estate',
            cover_image: 'https://i.imgur.com/pOZ6mKF.jpg',
            theme: 'Light',
            red_score: 280,
            blue_score: 14201,
            indigo: 50.71,
            channel_counter: 57,
            follower_counter: 22510,
            views: 198400
        },
        {
            name: 'Cooking',
            cover_image: 'https://i.imgur.com/Hl4QWT8.jpg',
            theme: 'Light',
            red_score: 1420,
            blue_score: 8890,
            indigo: 6.26,
            channel_counter: 42,
            follower_counter: 28800,
            views: 76981
        },
        {
            name: 'Baking',
            cover_image: 'https://i.imgur.com/KSWGXJT.jpg',
            theme: 'Light',
            red_score: 1020,
            blue_score: 22500,
            indigo: 22.06,
            channel_counter: 63,
            follower_counter: 38600,
            views: 208476
        },

    ]

    await Group.insertMany(groups);
    console.log('Created some groups!');
    return groups;
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
    await createGroups();
    await createUsers();
    // await createChannels();
    // await createPosts();
    // await createComments()
}

run()